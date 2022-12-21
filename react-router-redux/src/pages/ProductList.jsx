import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../slices/productSlice";
import debounce from "lodash.debounce";

const ProductList = () => {
  // const [productDetails, setProductDetails] = useState([]);
  const productDetails = useSelector((state) => {
    console.log(state);
    return state.products.productList || [];
  });
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((json) => setProductDetails(json.products));
    dispatch(fetchProductList())
    // const debouncedSave = debounce(() => dispatch(fetchProductList()), 1000);
  }, []);
  return (
    <>
      <h2>Product List</h2>
      <ul>
        {productDetails.map((product) => (
          <li key={product.id}>
            <a
              href={`/product/${product.category}/${
                product.id
              }/${product.title.replace(" ", "-")}`}
            >
              {product.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
