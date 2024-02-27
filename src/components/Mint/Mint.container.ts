import { connect } from "react-redux";
import {
  mintRequest,
  connectWalletRequest,
} from "../../modules/wallet/actions";
import {
  getError,
  isConnected,
  isConnecting,
} from "../../modules/wallet/selectors";
import { RootState } from "../../modules/types";
import { MapDispatch, MapDispatchProps, MapStateProps } from "./Mint.types";
import Mint from "./Mint";

const mapState = (state: RootState): MapStateProps => ({
  isConnected: isConnected(state),
  isConnecting: isConnecting(state),
  error: getError(state),
});

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onConnect: () => dispatch(connectWalletRequest()),
  onMint: (amount: string) => dispatch(mintRequest(amount)),
});

export default connect(mapState, mapDispatch)(Mint);
