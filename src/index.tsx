import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Routes } from './components/Routes'

require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
    <Footer />
  </Provider>,
  document.getElementById('root')
)
