import menuSvg from "@/assets/menu.svg";
import { Link } from "@tanstack/react-router";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import "../styles/Navbar.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navbar() {
  const user = useContext(UserContext);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="flex items-center pb-5 md:pb-1">
      <nav>
        <ul className="font-montserrat bg-app-secondary py-3 md:py-4 px-8 text-base justify-between items-center md:justify-center gap-5 flex max-w-fit rounded-xl z-2 shadow-[0_5px_5px_var(--uplift-color)]">
          <li>
            <Link
              to="/"
              activeProps={{ className: "link-active" }}
              className="font-playfair text-xl md:text-2xl"
            >
              Chai Shy
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              to="/menu/drinks-1"
              activeProps={{ className: "link-active" }}
            >
              Menu
            </Link>
          </li>
          <li className="hidden md:block">
            <Link to="/about" activeProps={{ className: "link-active" }}>
              About
            </Link>
          </li>
          <li className="hidden md:block">
            <Link to="/book" activeProps={{ className: "link-active" }}>
              Book a table
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="marginl-auto hidden md:block">
        {user == "empty" ? (
          <ul className="font-montserrat bg-app-secondary py-3 md:py-4 px-8 text-base justify-between items-center md:justify-center gap-5 flex max-w-fit rounded-xl">
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
              className={`dropdown-menu flex-column flex-gap-20 flex ${dropdown ? "active-dropdown" : ""}`}
            >
              <Link className="link-default flex-gap-5 flex" to="/profile">
                <img src="/icons/profile.svg" alt="profile" />
                Profile
              </Link>
              <Link className="link-default flex-gap-5 flex" to="/orders">
                <img src="/icons/history2.svg" alt="orders history" />
                Orders
              </Link>
              <Link className="link-default flex-gap-5 flex" to="/support">
                <img src="/icons/support2.svg" alt="profile" />
                Support
              </Link>
              <form action="/api/auth/logout" method="post">
                <button className="btn-default flex-gap-5 flex">
                  <img src="/icons/logout.svg" alt="profile" />
                  Logout
                </button>
              </form>
            </li>
          </ul>
        )}
      </nav>
      <nav className="ml-auto md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="active:rotate-90 duration-300">
            <img src={menuSvg} className="h-10" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Navigate</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link
                  to="/menu/drinks-1"
                  activeProps={{ className: "link-active" }}
                >
                  Menu
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about" activeProps={{ className: "link-active" }}>
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/book" activeProps={{ className: "link-active" }}>
                  Book a table
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {user == "empty" ? (
                <div>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/login"
                      activeProps={{ className: "link-active" }}
                    >
                      Login
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/signup"
                      activeProps={{ className: "link-active" }}
                    >
                      Signup
                    </Link>
                  </DropdownMenuItem>
                </div>
              ) : (
                <div>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/profile"
                      activeProps={{ className: "link-active" }}
                    >
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/orders"
                      activeProps={{ className: "link-active" }}
                    >
                      Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/support"
                      activeProps={{ className: "link-active" }}
                    >
                      Support
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <form action="/api/auth/logout" method="post">
                      Logout
                    </form>
                  </DropdownMenuItem>
                </div>
              )}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  );
}
