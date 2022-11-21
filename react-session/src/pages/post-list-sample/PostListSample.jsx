import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const initFormVal = {
  title: "",
  desc: "",
};
const PostListSample = () => {
  const [postList, setPostList] = useState([]);
  const [formVal, setFormVal] = useState(initFormVal);
  const formFieldHandler = (event) => {
    const { name, value } = event.target;
    setFormVal((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const newPostSubmitHandler = (event) => {
    event.preventDefault();
    setPostList((prev) => [...prev, formVal]);
    setFormVal(initFormVal);
  };
  return (
    <>
      <Container>
        <form onSubmit={newPostSubmitHandler}>
          <Row className="mt-3">
            <Col xs={8}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  value={formVal.title}
                  className="form-control"
                  placeholder="Enter Title"
                  onChange={formFieldHandler}
                />
              </div>
              <div className="form-group">
                <textarea
                  id=""
                  rows="5"
                  name="desc"
                  value={formVal.desc}
                  placeholder="Give some details"
                  className="form-control"
                  onChange={formFieldHandler}
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Create Post
                </button>
              </div>
            </Col>
          </Row>
        </form>

        <hr />
        <div>
          {postList.map((post) => {
            return (
              <div
                style={{
                  border: "1px solid gray",
                  margin: "5px 2px",
                  padding: "5px 10px",
                }}
              >
                <h4>{post.title}</h4>
                <p>{post.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default PostListSample;
