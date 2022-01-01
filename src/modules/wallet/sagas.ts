import { ethers } from 'ethers'
import { call, put, takeEvery } from 'redux-saga/effects'  
import { push } from 'connected-react-router'  

import {
  burnFailure,
  burnSuccess,
  BurnRequestAction,
  BURN_REQUEST,
  connectWalletFailure,
  connectWalletSuccess,
  CONNECT_WALLET_REQUEST,
  transferFailure,
  transferSuccess,
  TransferRequestAction,
  TRANSFER_REQUEST,
} from './actions'
import { WindowWithEthereum } from './types'
import { locations } from '../routing/locations'

// The regular `window` object with `ethereum` injected by MetaMask
const windowWithEthereum = window as unknown as WindowWithEthereum

/* This is the Dummy Token address, it identifies the token contract once deployed */
export const TOKEN_ADDRESS = process.env.REACT_APP_TOKEN_ADDRESS!
if (!TOKEN_ADDRESS) {
  console.error(`Missing env variable REACT_APP_TOKEN_ADDRESS`)
}

export const TOKEN_ABI = [
  'function symbol() view returns (string)',
  'function balanceOf(address) view returns (uint)',
  'function transfer(address to, uint amount)',
  'function burn(uint amount)',
]

export function* walletSaga() {
  yield takeEvery(BURN_REQUEST, handleBurnRequest)
  yield takeEvery(CONNECT_WALLET_REQUEST, handleConnectWalletRequest)
  yield takeEvery(TRANSFER_REQUEST, handleTransferRequest)
}

function* handleConnectWalletRequest() {
  try {
    const provider = new ethers.providers.Web3Provider(
      windowWithEthereum.ethereum
    )
    yield call(() => provider.send('eth_requestAccounts', []))
    const signer = provider.getSigner()
    const address: string = yield call(() => signer.getAddress())

    const token = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider)
    const balance: string = yield call(() => token.balanceOf(address))
    const symbol: string = yield call(() => token.symbol())

    yield put(connectWalletSuccess(address, balance.toString(), symbol))
  } catch (error: any) {
    yield put(connectWalletFailure(error.message))
  }
}

function* handleTransferRequest(action: TransferRequestAction) {
  const { address, amount } = action.payload;
  try {
    const provider = new ethers.providers.Web3Provider(
      windowWithEthereum.ethereum
    )
    yield call(() => provider.send('eth_requestAccounts', []))
    const signer = provider.getSigner()

    const token = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signer)

    yield call(() => token.transfer(address, amount))

    yield put(push(locations.root()))

    //Update balance
    const balance: string = yield call(() => token.balanceOf(address))
    yield put(transferSuccess(balance.toString()))
  
  } catch (error: any) {
    yield put(transferFailure(error.message))
  }
}

function* handleBurnRequest(action: BurnRequestAction) {
  const { amount } = action.payload;
  try {
    const provider = new ethers.providers.Web3Provider(
      windowWithEthereum.ethereum
    )
    yield call(() => provider.send('eth_requestAccounts', []))
    const signer = provider.getSigner()

    const token = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signer)

    //Do Burn
    yield call(() => token.burn(amount))

    yield put(push(locations.root()))
    
    //Update balance
    const balance: string = yield call(() => token.balanceOf(address))
    yield put(burnSuccess(balance.toString()))
  
  } catch (error: any) {
    yield put(burnFailure(error.message))
  }
}
