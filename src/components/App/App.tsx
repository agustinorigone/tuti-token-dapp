import React from 'react'
import { Props } from './App.types'
import { Link } from 'react-router-dom'
import { locations } from '../../modules/routing/locations'
import './App.css'

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
            <Header>Wallet</Header>
            <p>
              <strong>Address:</strong>&nbsp;
              {address.slice(0, 6) + '...' + address.slice(-4)}
            </p>
            <p>
              <strong>Balance:</strong>&nbsp;
              {balance + ' ' + symbol + ' '}<span><Link to={locations.transfer()}>TRANSFER</Link></span>
            </p>
          </Card>
        )}
      </Center>
    </Page>
  )
}

export default App
