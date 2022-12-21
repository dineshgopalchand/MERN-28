import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  product: {},
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productFetching: (state) => {
      state.isLoading = true;
      state.productList = [];
      state.error = null;
    },
    updateProductList: (state, { payload }) => {
      state.isLoading = false;
      state.productList = payload;
    },
    updateProduct: (state, { payload }) => {
      state.isLoading = false;
      state.product = payload;
    },
    fetchError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default productSlice.reducer;
const { productFetching, updateProductList, fetchError, updateProduct } =
  productSlice.actions;

// Define a thunk that dispatches those action creators
const fetchProductList = () => async (dispatch) => {
  dispatch(productFetching());
  try {
    const response = await axios("https://dummyjson.com/products");
    dispatch(updateProductList(response.data.products));
  } catch (err) {
    dispatch(fetchError(err));
  }
};
const fetchProduct = (id) => async (dispatch) => {
  dispatch(productFetching());
  try {
    const response = await axios(`https://dummyjson.com/products/${id}`);
    dispatch(updateProduct(response.data));
  } catch (err) {
    dispatch(fetchError(err));
  }
};
export { fetchProductList, fetchProduct };
