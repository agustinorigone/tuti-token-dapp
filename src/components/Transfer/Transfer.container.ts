import { connect } from "react-redux";
import {
  connectWalletRequest,
  transferRequest,
} from "../../modules/wallet/actions";
import {
  getError,
  isConnected,
  isConnecting,
} from "../../modules/wallet/selectors";
import { RootState } from "../../modules/types";
import { MapDispatch, MapDispatchProps, MapStateProps } from "./Transfer.types";
import Transfer from "./Transfer";

const mapState = (state: RootState): MapStateProps => ({
  isConnected: isConnected(state),
  isConnecting: isConnecting(state),
  error: getError(state),
});

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onConnect: () => dispatch(connectWalletRequest()),
  onTransfer: (amount: string, address: string) =>
    dispatch(transferRequest(amount, address)),
});

export default connect(mapState, mapDispatch)(Transfer);
