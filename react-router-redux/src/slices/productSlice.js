import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productList: [],
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
    fetchError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default productSlice.reducer;
const { productFetching, updateProductList, fetchError } = productSlice.actions;

// Define a thunk that dispatches those action creators
const fetchProductList = () => async (dispatch) => {
  dispatch(productFetching());
  try {
    const response = await fetch("https://dummyjson.com/products");
    dispatch(updateProductList(response.products));
  } catch (err) {
    dispatch(fetchError(err));
  }
};
export { fetchProductList };
