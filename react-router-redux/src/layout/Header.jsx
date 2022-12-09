import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { MdManageAccounts, MdDashboard } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import "./Header.css";

const Header = () => {
  const { isLogin, logout, login } = useContext(AuthContext);
  const navLink = [
    {
      content: "Home",
      link: "/",
    },
    {
      content: "About",
      link: "/about",
    },
    {
      content: "Contact",
      link: "/contact",
    },
    {
      content: "Services",
      link: "/services",
    },
    {
      content: "Product List",
      link: "/products",
    },
    {
      content: "Article",
      link: "/article",
    },
  ];
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
              {navLink.map((nav, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to={nav.link}
                  >
                    {nav.content}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Nav>
          <div>
            {!isLogin && (
              <button onClick={() => login()}>
                <BiLogIn /> Login
              </button>
            )}
            {isLogin && (
              <div className="profile-option">
                <Link to="/user/profile">
                  <FaUserAlt />
                </Link>
                <Link to="/user/setting">
                  <MdManageAccounts />
                </Link>
                <Link to="/user/dashboard">
                  <MdDashboard />
                </Link>
                <button onClick={() => logout()}>
                  <BiLogOut /> Logout
                </button>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
