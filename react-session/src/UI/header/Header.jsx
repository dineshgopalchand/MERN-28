import "./Header.css";
import { BsBookFill, BsBook } from "react-icons/bs";
// import { v4 as uuid } from "uuid";
function Header() {
  // const uniqueIds = [];
  // for (let i = 0; i < 5; i++) {
  //   uniqueIds.push(uuid());
  // }
  // console.log(uniqueIds);
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
