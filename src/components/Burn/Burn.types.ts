import { AnyAction, Dispatch } from "redux";
import {
  ConnectWalletRequestAction,
  BurnRequestAction,
} from "../../modules/wallet/actions";

export type Props = {
  isConnecting: boolean;
  isConnected: boolean;
  error: string | null;
  onConnect: () => void;
  onBurn: (amount: string) => void;
};

export type MapStateProps = Pick<
  Props,
  "isConnecting" | "isConnected" | "error"
>;
export type MapDispatchProps = Pick<Props, "onConnect" | "onBurn">;
export type MapDispatch = Dispatch<
  ConnectWalletRequestAction | BurnRequestAction | AnyAction
>;
