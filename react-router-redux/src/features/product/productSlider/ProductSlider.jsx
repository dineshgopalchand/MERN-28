import React, { Suspense } from "react";
// import ReactImageGallery from 'react-image-gallery';
import "./ProductSlider.css";
const ReactImageGallery = React.lazy(() => import("react-image-gallery"));

const ProductSlider = ({ sliderImages }) => {
  return (
    <Suspense fallback="Loading...">
      <ReactImageGallery items={sliderImages} />
    </Suspense>
  );
};

export default ProductSlider;
