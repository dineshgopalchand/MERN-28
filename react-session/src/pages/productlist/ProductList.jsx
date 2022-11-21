import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Pagination, {
  bootstrap5PaginationPreset,
} from "react-responsive-pagination";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(50);
  const [limit, setLimit] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${
        (currentPage - 1) * limit
      }`
    )
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.products);
        setTotal(response.total);
        setTotalPages(Math.ceil(response.total / response.limit));
      });
  }, [limit, currentPage]);
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
                <Col xs={3} className="mb-2" key={product.id}>
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
                        $
                        {Math.round(
                          (product.price -
                            (product.price * product.discountPercentage) /
                              100) *
                            100
                        ) / 100}
                      </span>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className="mt-2">
            <Pagination
              {...bootstrap5PaginationPreset}
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </main>
      </section>
    </>
  );
};

export default ProductList;
