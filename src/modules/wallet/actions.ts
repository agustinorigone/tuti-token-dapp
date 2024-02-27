export const CONNECT_WALLET_REQUEST = "[Request] Connect Wallet";
export const CONNECT_WALLET_SUCCESS = "[Success] Connect Wallet";
export const CONNECT_WALLET_FAILURE = "[Failure] Connect Wallet";
export const BURN_REQUEST = "[Request] Burn";
export const BURN_SUCCESS = "[Success] Burn";
export const BURN_FAILURE = "[Failure] Burn";
export const MINT_REQUEST = "[Request] Mint";
export const MINT_SUCCESS = "[Success] Mint";
export const MINT_FAILURE = "[Failure] Mint";
export const TRANSFER_REQUEST = "[Request] Transfer";
export const TRANSFER_SUCCESS = "[Success] Transfer";
export const TRANSFER_FAILURE = "[Failure] Transfer";

export function connectWalletRequest() {
  return {
    type: CONNECT_WALLET_REQUEST,
    payload: {},
  };
}

export function connectWalletSuccess(
  address: string,
  balance: string,
  symbol: string
) {
  return {
    type: CONNECT_WALLET_SUCCESS,
    payload: {
      address,
      balance,
      symbol,
    },
  };
}

export function connectWalletFailure(error: string) {
  return {
    type: CONNECT_WALLET_FAILURE,
    payload: {
      error,
    },
  };
}

export function burnRequest(toAmount: string) {
  return {
    type: BURN_REQUEST,
    payload: {
      toAmount,
    },
  };
}

export function burnSuccess(balance: string) {
  return {
    type: BURN_SUCCESS,
    payload: {
      balance,
    },
  };
}

export function burnFailure(error: string) {
  return {
    type: BURN_FAILURE,
    payload: {
      error,
    },
  };
}

export function mintRequest(toAmount: string) {
  return {
    type: MINT_REQUEST,
    payload: {
      toAmount,
    },
  };
}

export function mintSuccess(balance: string) {
  return {
    type: MINT_SUCCESS,
    payload: {
      balance,
    },
  };
}

export function mintFailure(error: string) {
  return {
    type: MINT_FAILURE,
    payload: {
      error,
    },
  };
}

export function transferRequest(toAmount: string, toAddress: string) {
  return {
    type: TRANSFER_REQUEST,
    payload: {
      toAmount,
      toAddress,
    },
  };
}

export function transferSuccess(balance: string) {
  return {
    type: TRANSFER_SUCCESS,
    payload: {
      balance,
    },
  };
}

export function transferFailure(error: string) {
  return {
    type: TRANSFER_FAILURE,
    payload: {
      error,
    },
  };
}

export type ConnectWalletRequestAction = ReturnType<
  typeof connectWalletRequest
>;
export type ConnectWalletSuccessAction = ReturnType<
  typeof connectWalletSuccess
>;
export type ConnectWalletFailureAction = ReturnType<
  typeof connectWalletFailure
>;
export type BurnRequestAction = ReturnType<typeof burnRequest>;
export type BurnSuccessAction = ReturnType<typeof burnSuccess>;
export type BurnFailureAction = ReturnType<typeof burnFailure>;
export type MintRequestAction = ReturnType<typeof mintRequest>;
export type MintSuccessAction = ReturnType<typeof mintSuccess>;
export type MintFailureAction = ReturnType<typeof mintFailure>;
export type TransferRequestAction = ReturnType<typeof transferRequest>;
export type TransferSuccessAction = ReturnType<typeof transferSuccess>;
export type TransferFailureAction = ReturnType<typeof transferFailure>;
