import { connect } from "react-redux";
import { connectWalletRequest } from "../../modules/wallet/actions";
import { isConnected, isConnecting } from "../../modules/wallet/selectors";
import { RootState } from "../../modules/types";
import { MapStateProps } from "./ProtectedRoute.types";
import ProtectedRoute from "./ProtectedRoute";

const mapState = (state: RootState): MapStateProps => ({
  isConnected: isConnected(state),
  isConnecting: isConnecting(state),
});

export default connect(mapState)(ProtectedRoute);
