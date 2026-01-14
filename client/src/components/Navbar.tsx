import { Link } from "@tanstack/react-router";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar flex flex-gap-20">
        <Link to="/">
          <li className="logo">
            <button id="homeBtn">Chai Shy</button>
          </li>
        </Link>
        <li>
          <Link to="/menu">
            <button id="menuBtn">Menu</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button id="aboutBtn">About</button>
          </Link>
        </li>
        <li>
          <Link to="/book">
            <button id="bookBtn">Book a table</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
