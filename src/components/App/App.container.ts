import { connect } from "react-redux";
import { connectWalletRequest } from "../../modules/wallet/actions";
import {
  getAddress,
  getBalance,
  getError,
  getSymbol,
  isConnected,
  isConnecting,
} from "../../modules/wallet/selectors";
import { RootState } from "../../modules/types";
import { MapDispatch, MapDispatchProps, MapStateProps } from "./App.types";
import App from "./App";

const mapState = (state: RootState): MapStateProps => ({
  isConnected: isConnected(state),
  isConnecting: isConnecting(state),
  error: getError(state),
  address: getAddress(state),
  balance: getBalance(state),
  symbol: getSymbol(state),
});

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onConnect: () => dispatch(connectWalletRequest()),
});

export default connect(mapState, mapDispatch)(App);
