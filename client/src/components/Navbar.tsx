import { Link } from "@tanstack/react-router";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="flex flex-items-center">
      <nav>
        <ul className="navbar flex flex-center flex-gap-20">
          <li>
            <Link
              to="/"
              activeProps={{ className: "link-active" }}
              className="link-nav logo"
            >
              Chai Shy
            </Link>
          </li>
          <li>
            <Link
              to="/menu/drinks-1"
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
      <nav className="marginl-auto">
        <ul className="navbar flex flex-center flex-gap-20">
          <li>
            <Link
              to="/login"
              activeProps={{ className: "link-active" }}
              className="link-nav"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              activeProps={{ className: "link-active" }}
              className="link-nav"
            >
              Singup
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
