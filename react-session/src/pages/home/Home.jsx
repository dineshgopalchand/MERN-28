import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Experties from "../../features/home/Experties";
import Slider from "../../features/home/Slider";
import "./Home.css";
const Home = () => {
  const list = ['dinesh','alok', 'khan sir', 'varun', 'Manisha'].map((item, index) => {
    return {
      key: index,
      value: item,
    };
  });
  return (
    <>
      <Container fluid className="px-0">
        <Slider />
      </Container>
      <Container fluid className="px-0 mt-2">
        <Experties />
      </Container>
      <dl>
        {list.map((item) => {
          return (
            <Fragment key={item.key}>
              <dt >{item.key}</dt>
              <dd>{item.value}</dd>
            </Fragment>
          );
        })}
      </dl>
    </>
  );
};

export default Home;
