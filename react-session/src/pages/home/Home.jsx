import React, { Fragment, Suspense } from "react";
import { Container } from "react-bootstrap";
// import Experties from "../../features/home/Experties";
// import Slider from "../../features/home/Slider";
import "./Home.css";

const Slider = React.lazy(() => import("../../features/home/Slider"));
const Experties = React.lazy(() => import("../../features/home/Experties"));
const Home = () => {
  return (
    <>
      <Container fluid className="px-0">
        <Suspense fallback={<div>Loading...</div>}>
          <Slider />
        </Suspense>
      </Container>
      <Container fluid className="px-0 mt-2">
        <Suspense fallback={<div>Loading...</div>}>
          <Experties />
        </Suspense>
      </Container>
    </>
  );
};

export default Home;
