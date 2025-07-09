import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import categories from "./categoriesSlice/categoriesSlice";
import products from "./ProductsSlice/ProductsSlice";
import cart from "./cart/CartSlice";
import storage from "redux-persist/lib/storage";
import wishlist from "./wishlist/wishlistSlice";
import auth from "./auth/authSlice";
import orders from "./orders/ordersSlice";
import toasts from "./toasts/ToastsSlice/ToastsSlice";
const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "accessToken"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

// const wishlistPersistConfig = {
//   key: "wishlist",
//   storage,
//   whitelist: ["itemsId"],
// };

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  categories,
  products,
  cart: persistReducer(cartPersistConfig, cart),
  wishlist,
  orders,
  toasts,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persister = persistStore(store);

export { store, persister };
