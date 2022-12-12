import React, { Suspense, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import ProductSlider from "../features/product/productSlider/ProductSlider";
const ProductSlider = React.lazy(() =>
  import("../features/product/productSlider/ProductSlider")
);

const Product = () => {
  const [sliderImages, setSliderImages] = useState([]);

  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((pd) => setProductDetails(pd));
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
