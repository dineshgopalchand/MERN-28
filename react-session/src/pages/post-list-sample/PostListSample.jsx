import React, { useReducer, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const ACTION = {
  SET_TITLE: "set_title",
  SET_DESC: "set_description",
  SET_INIT_VAL: "reset_value",
};
const initFormVal = {
  title: "",
  desc: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_TITLE:
      return { ...state, title: action.payload };
    case ACTION.SET_DESC:
      return { ...state, desc: action.payload };
    case ACTION.SET_INIT_VAL:
      return initFormVal;
    default:
      return state;
  }
};

const PostListSample = () => {
  const [postList, setPostList] = useState([]);

  const [formValue, formDispatch] = useReducer(formReducer, initFormVal);

  const newPostSubmitHandler = (event) => {
    event.preventDefault();
    setPostList((prev) => [...prev, formValue]);
    formDispatch({ type: ACTION.SET_INIT_VAL });
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
                  //   value={formVal.title}
                  value={formValue.title}
                  className="form-control"
                  placeholder="Enter Title"
                  //   onChange={formFieldHandler}
                  onChange={(event) => {
                    formDispatch({
                      type: ACTION.SET_TITLE,
                      payload: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <textarea
                  id=""
                  rows="5"
                  name="desc"
                  //   value={formVal.desc}
                  value={formValue.desc}
                  placeholder="Give some details"
                  className="form-control"
                  //   onChange={formFieldHandler}
                  onChange={(event) => {
                    formDispatch({
                      type: ACTION.SET_DESC,
                      payload: event.target.value,
                    });
                  }}
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
