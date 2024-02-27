import { applyMiddleware, createStore } from "redux";
import createSagasMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducer } from "./reducer";
import { sagas } from "./sagas";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const sagasMiddleware = createSagasMiddleware();
const loggerMiddleware = createLogger({
  collapsed: () => true,
});

const middleware = applyMiddleware(sagasMiddleware, loggerMiddleware);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

sagasMiddleware.run(sagas);

export { store, persistor };
