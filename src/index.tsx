import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Routes } from './components/Routes'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { store, history } from './modules/store'

require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
    <Footer />
  </Provider>,
  document.getElementById('root')
)
