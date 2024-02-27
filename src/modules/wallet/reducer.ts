import { AnyAction } from "redux";
import {
  BurnFailureAction,
  BurnSuccessAction,
  BURN_FAILURE,
  BURN_REQUEST,
  BURN_SUCCESS,
  ConnectWalletFailureAction,
  ConnectWalletSuccessAction,
  CONNECT_WALLET_FAILURE,
  CONNECT_WALLET_REQUEST,
  CONNECT_WALLET_SUCCESS,
  MintFailureAction,
  MintSuccessAction,
  MINT_FAILURE,
  MINT_REQUEST,
  MINT_SUCCESS,
  TransferFailureAction,
  TransferSuccessAction,
  TRANSFER_FAILURE,
  TRANSFER_REQUEST,
  TRANSFER_SUCCESS,
} from "./actions";
import { WalletState } from "./types";

const INITIAL_STATE: WalletState = {
  address: null,
  balance: null,
  amount: null,
  symbol: null,
  isBurning: false,
  isConnecting: false,
  isMinting: false,
  isTransfering: false,
  error: null,
};

export function walletReducer(
  state: WalletState = INITIAL_STATE,
  action: AnyAction
): WalletState {
  switch (action.type) {
    case CONNECT_WALLET_REQUEST: {
      return {
        ...state,
        isConnecting: true,
        error: null,
      };
    }
    case CONNECT_WALLET_SUCCESS: {
      const { address, balance, symbol } =
        action.payload as ConnectWalletSuccessAction["payload"];
      return {
        ...state,
        isConnecting: false,
        address,
        balance,
        symbol,
        error: null,
      };
    }

    case CONNECT_WALLET_FAILURE: {
      const { error } = action.payload as ConnectWalletFailureAction["payload"];
      return {
        ...state,
        isConnecting: false,
        error,
      };
    }

    case BURN_REQUEST: {
      return {
        ...state,
        isBurning: true,
        error: null,
      };
    }

    case BURN_SUCCESS: {
      const { balance } = action.payload as BurnSuccessAction["payload"];
      return {
        ...state,
        balance,
        isBurning: false,
        error: null,
      };
    }

    case BURN_FAILURE: {
      const { error } = action.payload as BurnFailureAction["payload"];
      return {
        ...state,
        isBurning: false,
        error,
      };
    }

    case MINT_REQUEST: {
      return {
        ...state,
        isMinting: true,
        error: null,
      };
    }

    case MINT_SUCCESS: {
      const { balance } = action.payload as MintSuccessAction["payload"];
      return {
        ...state,
        balance,
        isMinting: false,
        error: null,
      };
    }

    case MINT_FAILURE: {
      const { error } = action.payload as MintFailureAction["payload"];
      return {
        ...state,
        isMinting: false,
        error,
      };
    }

    case TRANSFER_REQUEST: {
      return {
        ...state,
        isTransfering: true,
        error: null,
      };
    }

    case TRANSFER_SUCCESS: {
      const { balance } = action.payload as TransferSuccessAction["payload"];
      return {
        ...state,
        balance,
        isTransfering: false,
      };
    }

    case TRANSFER_FAILURE: {
      const { error } = action.payload as TransferFailureAction["payload"];
      return {
        ...state,
        isTransfering: false,
        error,
      };
    }

    default:
      return state;
  }
}
