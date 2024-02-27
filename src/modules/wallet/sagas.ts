import { ethers } from "ethers";
import { call, put, select, takeEvery } from "redux-saga/effects";

import {
  burnFailure,
  burnSuccess,
  BurnRequestAction,
  BURN_REQUEST,
  connectWalletFailure,
  connectWalletSuccess,
  CONNECT_WALLET_REQUEST,
  mintFailure,
  mintSuccess,
  MintRequestAction,
  MINT_REQUEST,
  transferFailure,
  transferSuccess,
  TransferRequestAction,
  TRANSFER_REQUEST,
} from "./actions";
import { WindowWithEthereum } from "./types";
import { getAddress } from "./selectors";

// The regular `window` object with `ethereum` injected by MetaMask
const windowWithEthereum = window as unknown as WindowWithEthereum;

/* This is the Dummy Token address, it identifies the token contract once deployed */
export const TOKEN_ADDRESS = process.env.REACT_APP_TOKEN_ADDRESS!;
if (!TOKEN_ADDRESS) {
  console.error(`Missing env variable REACT_APP_TOKEN_ADDRESS`);
}

export const TOKEN_ABI = [
  "function symbol() view returns (string)",
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount)",
  "function mint(uint256 amount) external",
];

export function* walletSaga() {
  yield takeEvery(CONNECT_WALLET_REQUEST, handleConnectWalletRequest);
  yield takeEvery(TRANSFER_REQUEST, handleTransferRequest);
  yield takeEvery(BURN_REQUEST, handleBurnRequest);
  yield takeEvery(MINT_REQUEST, handleMintRequest);
}

function* handleConnectWalletRequest() {
  try {
    const provider = new ethers.providers.Web3Provider(
      windowWithEthereum.ethereum
    );
    yield call(() => provider.send("eth_requestAccounts", []));
    const signer = provider.getSigner();
    const address: string = yield call(() => signer.getAddress());

    const token = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);
    const balance: string = yield call(() => token.balanceOf(address));
    const symbol: string = yield call(() => token.symbol());

    yield put(
      connectWalletSuccess(
        address,
        Number(ethers.utils.formatEther(balance.toString())).toFixed(2),
        symbol
      )
    );
  } catch (error: any) {
    yield put(connectWalletFailure(error.message));
  }
}

function* handleTransferRequest(action: TransferRequestAction) {
  const { toAmount, toAddress } = action.payload;
  try {
    const address: string = yield select(getAddress);

    const provider = new ethers.providers.Web3Provider(
      windowWithEthereum.ethereum
    );
    yield call(() => provider.send("eth_requestAccounts", []));
    const signer = provider.getSigner();

    const token = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signer);

    // Perform the token transfer
    const transaction: ethers.providers.TransactionResponse = yield call(() =>
      token.transfer(toAddress, ethers.utils.parseEther(toAmount))
    );

    // Wait for the transaction to be mined
    yield call(() => transaction.wait());

    //Update balance
    const balance: string = yield call(() => token.balanceOf(address));
    const balanceFormatted: string = Number(
      ethers.utils.formatEther(balance.toString())
    ).toFixed(2);
    yield put(transferSuccess(balanceFormatted));
  } catch (error: any) {
    yield put(transferFailure(error.message));
  }
}

function* handleBurnRequest(action: BurnRequestAction) {
  const { toAmount } = action.payload;
  const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
  try {
    const address: string = yield select(getAddress);

    const provider = new ethers.providers.Web3Provider(
      windowWithEthereum.ethereum
    );
    yield call(() => provider.send("eth_requestAccounts", []));
    const signer = provider.getSigner();

    const token = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signer);

    // Perform the token transfer
    const transaction: ethers.providers.TransactionResponse = yield call(() =>
      token.transfer(ZERO_ADDRESS, ethers.utils.parseEther(toAmount))
    );

    // Wait for the transaction to be mined
    yield call(() => transaction.wait());

    //Update balance
    const balance: string = yield call(() => token.balanceOf(address));
    const balanceFormatted: string = Number(
      ethers.utils.formatEther(balance.toString())
    ).toFixed(2);
    yield put(burnSuccess(balanceFormatted));
  } catch (error: any) {
    yield put(burnFailure(error.message));
  }
}

function* handleMintRequest(action: MintRequestAction) {
  const { toAmount } = action.payload;
  try {
    const address: string = yield select(getAddress);

    const provider = new ethers.providers.Web3Provider(
      windowWithEthereum.ethereum
    );
    yield call(() => provider.send("eth_requestAccounts", []));
    const signer = provider.getSigner();

    const token = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signer);

    // Perform the token transfer
    const transaction: ethers.providers.TransactionResponse = yield call(() =>
      token.mint(ethers.utils.parseEther(toAmount))
    );

    // Wait for the transaction to be mined
    yield call(() => transaction.wait());

    //Update balance
    const balance: string = yield call(() => token.balanceOf(address));
    const balanceFormatted: string = Number(
      ethers.utils.formatEther(balance.toString())
    ).toFixed(2);
    yield put(mintSuccess(balanceFormatted));
  } catch (error: any) {
    yield put(mintFailure(error.message));
  }
}
