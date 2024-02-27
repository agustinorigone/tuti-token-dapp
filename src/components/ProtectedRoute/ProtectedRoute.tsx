import React from "react";
import { Redirect, Route } from "react-router-dom";
import { locations } from "../../modules/routing/locations";
import { Props } from "./ProtectedRoute.types";

const ProtectedRoute = (props: Props) => {
  const { isConnecting, isConnected, ...rest } = props;

  if (!isConnecting && !isConnected) {
    return <Redirect to={locations.root()} />;
  }

  return <Route {...rest} />;
};

export default React.memo(ProtectedRoute);
