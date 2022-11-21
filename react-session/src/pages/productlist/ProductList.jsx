import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(50);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12&skip=0")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.products);
        setTotal(response.total);
        setLimit(response.limit);
      });
  }, []);
  return (
    <>
      <section className="product-list__layout">
        <aside className="product-list__sidebar">
          <div className="product-filter">
            <h3 className="filter-category"> category 1</h3>
            <hr />
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>
          <div className="pruduct-filter">
            <h3 className="filter-category"> category 1</h3>
            <hr />
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>
        </aside>
        <main className="product-list__container">
          <Row>
            {products.map((product) => {
              return (
                <Col xs={3} className="mb-2">
                  <div className="product-card">
                    <img
                      className="product-image"
                      src={product.thumbnail}
                      alt={product.title}
                    />
                    <h3 className="product-name">{product.title}</h3>
                    <p className="product-desc">{product.description}</p>
                    <div>
                      <span className="main-price">
                        {" "}
                        <del>${product.price}</del>{" "}
                      </span>
                      <span className="discounted-price">
                        ${Math.round((product.price -
                          (product.price * product.discountPercentage) / 100)*100)/100}
                      </span>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </main>
      </section>
    </>
  );
};

export default ProductList;
