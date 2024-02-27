import React, { ChangeEvent, useState } from "react";
import { Header } from "../Header";
import { Props } from "./Burn.types";
import "./Burn.css";
import { Card, Form, Input, Button, Center, Page } from "decentraland-ui";
import { Footer } from "../Footer";

const Burn: React.FC<Props> = ({
  isConnected,
  isConnecting,
  onConnect,
  onBurn,
  error,
}) => {
  const [amount, setAmount] = useState("0");

  const handleSetAmount = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    //TODO: validate amount
    setAmount(value);
  };

  return (
    <>
      <Header />
      <Page className="Burn">
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
              <Input
                type="text"
                name="amount"
                placeholder="0"
                value={amount}
                onChange={handleSetAmount}
              />
              <Form onSubmit={() => onBurn(amount)}>
                <Button type="submit">Burn</Button>
              </Form>
              {error ? <p className="error">{error}</p> : null}
            </Card>
          )}
        </Center>
      </Page>
      <Footer />
    </>
  );
};

export default Burn;
