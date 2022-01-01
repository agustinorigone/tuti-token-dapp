// Connect Wallet
export const CONNECT_WALLET_REQUEST = '[Request] Connect Wallet'
export const CONNECT_WALLET_SUCCESS = '[Success] Connect Wallet'
export const CONNECT_WALLET_FAILURE = '[Failure] Connect Wallet'
export const BURN_REQUEST = '[Request] Burn'
export const BURN_SUCCESS = '[Success] Burn'
export const BURN_FAILURE = '[Failure] Burn'
export const TRANSFER_REQUEST = '[Request] Transfer'
export const TRANSFER_SUCCESS = '[Success] Transfer'
export const TRANSFER_FAILURE = '[Failure] Transfer'

export function connectWalletRequest() {
  return {
    type: CONNECT_WALLET_REQUEST,
    payload: {},
  }
}

export function connectWalletSuccess(address: string, balance: string, symbol: string) {
  return {
    type: CONNECT_WALLET_SUCCESS,
    payload: {
      address,
      balance,
      symbol,
    },
  }
}

export function connectWalletFailure(error: string) {
  return {
    type: CONNECT_WALLET_FAILURE,
    payload: {
      error,
    },
  }
}

export function transferRequest(amount: string, address: string) {
  return {
    type: TRANSFER_REQUEST,
    payload: { 
      amount,
      address,
    },
  }
}

export function transferSuccess(balance: string) {
  return {
    type: TRANSFER_SUCCESS,
    payload: {
      balance,
    },
  }
}

export function transferFailure(error: string) {
  return {
    type: TRANSFER_FAILURE,
    payload: {
      error,
    },
  }
}

export function burnRequest(amount: string) {
  return {
    type: BURN_REQUEST,
    payload: { 
      amount,
    },
  }
}

export function burnSuccess(balance: string) {
  return {
    type: BURN_SUCCESS,
    payload: {
      balance,
    },
  }
}

export function burnFailure(error: string) {
  return {
    type: BURN_FAILURE,
    payload: {
      error,
    },
  }
}

export type ConnectWalletRequestAction = ReturnType<typeof connectWalletRequest>
export type ConnectWalletSuccessAction = ReturnType<typeof connectWalletSuccess>
export type ConnectWalletFailureAction = ReturnType<typeof connectWalletFailure>
export type BurnRequestAction = ReturnType<typeof burnRequest>
export type BurnSuccessAction = ReturnType<typeof burnSuccess>
export type BurnFailureAction = ReturnType<typeof burnFailure>
export type TransferRequestAction = ReturnType<typeof transferRequest>
export type TransferSuccessAction = ReturnType<typeof transferSuccess>
export type TransferFailureAction = ReturnType<typeof transferFailure>
