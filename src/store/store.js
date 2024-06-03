import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./producs_slice.js";
import cartCheckerReducer from "./cartChecker.js";
import isLoggedInReducer from "./isLoggedInSlice.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cartChecker: cartCheckerReducer,
    isLoggedIn: isLoggedInReducer,
  },
});

export default store;
