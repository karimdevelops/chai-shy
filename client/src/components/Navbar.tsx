import { Link } from "@tanstack/react-router";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar flex flex-gap-20">
        <Link
          to="/"
          activeProps={{ className: "link-active" }}
          className="link-nav"
        >
          <li className="logo">Chai Shy</li>
        </Link>
        <li>
          <Link
            to="/menu"
            activeProps={{ className: "link-active" }}
            className="link-nav"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            activeProps={{ className: "link-active" }}
            className="link-nav"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/book"
            activeProps={{ className: "link-active" }}
            className="link-nav"
          >
            Book a table
          </Link>
        </li>
      </ul>
    </nav>
  );
}
