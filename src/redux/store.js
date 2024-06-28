import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import wishlistReducer from "./wishlist";
import filterReducer from "./filter";

// Configure persist options for wishlist reducer
const wishlistPersistConfig = {
  key: "wishlist",
  storage: storage,
  whitelist: ["wishlist"], // only wishlist state will be persisted
};

// Wrap wishlistReducer with persistReducer
const persistedWishlistReducer = persistReducer(
  wishlistPersistConfig,
  wishlistReducer
);

export const store = configureStore({
  reducer: {
    wishlist: persistedWishlistReducer,
    filters: filterReducer,
  },
});

export const persistor = persistStore(store);