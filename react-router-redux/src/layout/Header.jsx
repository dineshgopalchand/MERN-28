import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function Header() {
  const navLink=[
    {
      content:'Home',
      link:'/'
    },
    {
      content:'About',
      link:'/about'
    },
    {
      content:'Contact',
      link:'/contact'
    },
    {
      content:'Services',
      link:'/services'
    },
    {
      content:'Article',
      link:'/article'
    }
  ]
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                navLink.map((nav,index)=>(
                  <li className="nav-item" key={index}>
                  <NavLink className="nav-link " aria-current="page" to={nav.link}>
                    {nav.content}
                  </NavLink>
                </li>
                ))
              }
            </ul>
        
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
