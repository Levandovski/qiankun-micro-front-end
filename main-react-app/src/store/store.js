import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "reduxjs-toolkit-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "reduxjs-toolkit-persist/lib/storage";
import authenticateReducer from "./reducers/authenticate";

const persistConfig = {
  key: "qiankun-auth",
  storage,
  transforms: [
    // encryptTransform({
    //   secretKey: "8dce2b48-72ee-4c32-bb02-bee6b63e8f10",
    //   onError: function () {
    //     // Handle the error.
    //   },
    // }),
  ],
};

const reducers = combineReducers({
  authenticate: authenticateReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export { persistor };
