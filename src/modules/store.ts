import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagasMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { createRootReducer } from './reducer'
import { sagas } from './sagas'

const history = createBrowserHistory()
const rootReducer = createRootReducer(history)

const historyMiddleware = routerMiddleware(history)
const sagasMiddleware = createSagasMiddleware()
const loggerMiddleware = createLogger({
  collapsed: () => true,
})

const middleware = applyMiddleware(historyMiddleware, sagasMiddleware, loggerMiddleware)
const store = createStore(rootReducer, middleware)

sagasMiddleware.run(sagas)

export { store, history }