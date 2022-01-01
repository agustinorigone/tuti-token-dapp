import { ethers } from 'ethers'

export type WalletState = {
  address: string | null
  balance: string | null
  symbol: string | null
  isBurning: boolean
  isConnecting: boolean
  isTransfering: boolean
  error: string | null
}

export type WindowWithEthereum = Window & {
  ethereum: ethers.providers.ExternalProvider
}
