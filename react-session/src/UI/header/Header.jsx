import "./Header.css";
import { BsBookFill, BsBook } from "react-icons/bs";
function Header() {
  return (
    <>
      <header className="header-element">
        <h2>
          <BsBookFill />
          React Session
          <BsBook />
        </h2>
      </header>
    </>
  );
}

export default Header;
