import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Experties from "../../features/home/Experties";
import Slider from "../../features/home/Slider";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Container fluid className="px-0">
        <Slider />
      </Container>
      <Container fluid className="px-0 mt-2">
        <Experties />
      </Container>
    </>
  );
};

export default Home;
