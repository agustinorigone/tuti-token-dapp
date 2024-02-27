import React from "react";
import { Button, Card, Center, Page } from "decentraland-ui";
import { Props } from "./App.types";

import "./App.css";
import { Header } from "../Header";
import { Footer } from "../Footer";

const App: React.FC<Props> = ({
  address,
  balance,
  symbol,
  isConnected,
  onConnect,
  isConnecting,
  error,
}) => {
  return (
    <>
      <Header />
      <Page className="App">
        <Center>
          {!isConnected ? (
            <>
              <Button primary onClick={onConnect} loading={isConnecting}>
                Connect
              </Button>
              {error ? <p className="error">{error}</p> : null}
            </>
          ) : (
            <Card>
              <p>
                <strong>Address:</strong>&nbsp;
                {address.slice(0, 6) + "..." + address.slice(-4)}
              </p>
              <p>
                <strong>Balance:</strong>&nbsp;
                {balance + " " + symbol + " "}
              </p>
            </Card>
          )}
        </Center>
      </Page>
      <Footer />
    </>
  );
};

export default App;
