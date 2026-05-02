import menuSvg from "@/assets/menu.svg";
import { Link } from "@tanstack/react-router";
import { useContext } from "react";
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

  return (
    <div className="flex items-center pb-5 md:pb-1">
      <nav>
        <ul className="font-montserrat bg-app-secondary z-2 flex max-w-fit items-center justify-between gap-5 rounded-xl px-8 py-3 text-base shadow-[0_5px_5px_var(--uplift-color)] md:justify-center md:py-4">
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
          <ul className="font-montserrat bg-app-secondary flex max-w-fit items-center justify-between gap-5 rounded-xl px-8 py-3 text-base md:justify-center md:py-4">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img src="/icons/gear.svg" alt="settings" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Navigate</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link className="flex gap-2" to="/profile">
                    <img
                      src="/icons/profile.svg"
                      className="h-5"
                      alt="profile"
                    />
                    <span> Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="flex gap-2" to="/orders">
                    <img
                      src="/icons/history2.svg"
                      className="h-5"
                      alt="orders history"
                    />
                    Orders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="flex gap-2" to="/support">
                    <img
                      src="/icons/support2.svg"
                      className="h-5"
                      alt="profile"
                    />
                    Support
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <form
                id="logoutForm"
                action="/api/auth/logout"
                method="post"
              ></form>
              <DropdownMenuItem
                variant="destructive"
                onSelect={() => {
                  const logoutForm = document.getElementById(
                    "logoutForm",
                  ) as HTMLFormElement;
                  logoutForm.submit();
                }}
              >
                <img src="/icons/logout.svg" alt="profile" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </nav>
      <nav className="ml-auto md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="duration-300 active:rotate-90">
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
                  <form
                    id="logoutForm"
                    action="/api/auth/logout"
                    method="post"
                  ></form>
                  <DropdownMenuItem
                    variant="destructive"
                    onSelect={() => {
                      const logoutForm = document.getElementById(
                        "logoutForm",
                      ) as HTMLFormElement;
                      logoutForm.submit();
                    }}
                  >
                    Logout
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
