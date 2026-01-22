import { Link } from "@tanstack/react-router";
import "../styles/Navbar.css";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

export default function Navbar() {
  const user = useContext(UserContext);
  const [dropdown, setDropdown] = useState(false);

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
        {user == "empty" ? (
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
        ) : (
          <ul className="navbar dropdown">
            <img
              src="/icons/gear.svg"
              alt="settings"
              onClick={() =>
                dropdown ? setDropdown(false) : setDropdown(true)
              }
            />
            <li
              className={`dropdown-menu flex flex-column flex-gap-20 ${dropdown ? "active-dropdown" : ""}`}
            >
              <Link className="link-default flex flex-gap-5" to="/profile">
                <img src="/icons/profile.svg" alt="profile" />
                Profile
              </Link>
              <Link className="link-default flex flex-gap-5" to="/orders">
                <img src="/icons/history2.svg" alt="orders history" />
                Orders
              </Link>
              <Link className="link-default flex flex-gap-5" to="/support">
                <img src="/icons/support2.svg" alt="profile" />
                Support
              </Link>
              <form action="/api/auth/logout" method="post">
                <button className="btn-default flex flex-gap-5">
                  <img src="/icons/logout.svg" alt="profile" />
                  Logout
                </button>
              </form>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
