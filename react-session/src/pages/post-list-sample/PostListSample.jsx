import React, { useReducer, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SET_TITLE = "set_title";
const SET_DESC = "set_description";
const SET_INIT_VAL = "reset_value";
const initFormVal = {
  title: "",
  desc: "",
};

const formReducer = (state, action) => {
  //   console.log(state, action);
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_DESC:
      return { ...state, desc: action.payload };
    case SET_INIT_VAL:
      return initFormVal;
    default:
      return state;
  }
};

const PostListSample = () => {
  const [postList, setPostList] = useState([]);
  //   const [formVal, setFormVal] = useState(initFormVal);

  const [formValue, formDispatch] = useReducer(formReducer, initFormVal);

  //   const formFieldHandler = (event) => {
  //     const { name, value } = event.target;
  //     setFormVal((prev) => {
  //       return { ...prev, [name]: value };
  //     });
  //   };
  const newPostSubmitHandler = (event) => {
    event.preventDefault();
    // setPostList((prev) => [...prev, formVal]);
    setPostList((prev) => [...prev, formValue]);
    // setFormVal(initFormVal);
    formDispatch({ type: SET_INIT_VAL });
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
                      type: SET_TITLE,
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
                      type: SET_DESC,
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
