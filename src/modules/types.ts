import { WalletState } from "./wallet/types";
import { RouterState } from 'connected-react-router'

export type RootState = {
  wallet: WalletState,
  router: RouterState
}