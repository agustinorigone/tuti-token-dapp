import { connect } from "react-redux";
import {
  burnRequest,
  connectWalletRequest,
} from "../../modules/wallet/actions";
import {
  getError,
  isConnected,
  isConnecting,
} from "../../modules/wallet/selectors";
import { RootState } from "../../modules/types";
import { MapDispatch, MapDispatchProps, MapStateProps } from "./Burn.types";
import Burn from "./Burn";

const mapState = (state: RootState): MapStateProps => ({
  isConnected: isConnected(state),
  isConnecting: isConnecting(state),
  error: getError(state),
});

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onConnect: () => dispatch(connectWalletRequest()),
  onBurn: (amount: string) => dispatch(burnRequest(amount)),
});

export default connect(mapState, mapDispatch)(Burn);
