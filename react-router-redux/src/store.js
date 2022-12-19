import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./slices/counterSlice";
import products from "./slices/productSlice";
const store = configureStore({
  reducer: {
    counter: couterReducer,
    products,
  },
});

export default store;
