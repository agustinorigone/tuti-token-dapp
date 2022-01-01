import { AnyAction, Dispatch } from 'redux'
import { ConnectWalletRequestAction } from '../../modules/wallet/actions'

export type Props = {
  address: string
  balance: string
  symbol: string
  isConnected: boolean
  isConnecting: boolean
  error: string | null
  onConnect: () => void
}

export type MapStateProps = Pick<
  Props,
  'address' | 'balance' | 'symbol' | 'isConnected' | 'isConnecting' | 'error'
>
export type MapDispatchProps = Pick<Props, 'onConnect'>
export type MapDispatch = Dispatch<ConnectWalletRequestAction | AnyAction>
