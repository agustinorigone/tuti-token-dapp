import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "decentraland-ui/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from "./components/Routes";
import { store } from "./modules/store";

require("dotenv").config();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
