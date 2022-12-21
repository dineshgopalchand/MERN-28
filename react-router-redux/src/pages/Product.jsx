import React, { Suspense, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../slices/productSlice";
const ProductSlider = React.lazy(() =>
  import("../features/product/productSlider/ProductSlider")
);

const Product = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => {
    console.log(state);
    return state.products.product || {};
  });
  const [sliderImages, setSliderImages] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id]);

  useEffect(() => {
    if (productDetails?.images) {
      setSliderImages(
        productDetails.images.map((img) => {
          return {
            original: img,
            thumbnail: img,
          };
        })
      );
    }
  }, [productDetails]);
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col>
            <Suspense fallback={<p style={{ color: "red" }}>Loading..</p>}>
              <ProductSlider sliderImages={sliderImages} />
            </Suspense>
          </Col>
          <Col>
            <h3>{productDetails.brand}</h3>
            <p>{productDetails.description}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
