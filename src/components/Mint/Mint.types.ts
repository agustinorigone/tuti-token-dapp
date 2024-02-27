import { AnyAction, Dispatch } from "redux";
import {
  ConnectWalletRequestAction,
  MintRequestAction,
} from "../../modules/wallet/actions";

export type Props = {
  isConnecting: boolean;
  isConnected: boolean;
  error: string | null;
  onConnect: () => void;
  onMint: (amount: string) => void;
};

export type MapStateProps = Pick<
  Props,
  "isConnecting" | "isConnected" | "error"
>;
export type MapDispatchProps = Pick<Props, "onConnect" | "onMint">;
export type MapDispatch = Dispatch<
  ConnectWalletRequestAction | MintRequestAction | AnyAction
>;
