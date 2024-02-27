import { AnyAction, Dispatch } from "redux";
import {
  ConnectWalletRequestAction,
  TransferRequestAction,
} from "../../modules/wallet/actions";

export type Props = {
  isConnecting: boolean;
  isConnected: boolean;
  error: string | null;
  onConnect: () => void;
  onTransfer: (amount: string, address: string) => void;
};

export type MapStateProps = Pick<
  Props,
  "isConnecting" | "isConnected" | "error"
>;
export type MapDispatchProps = Pick<Props, "onConnect" | "onTransfer">;
export type MapDispatch = Dispatch<
  ConnectWalletRequestAction | TransferRequestAction | AnyAction
>;
