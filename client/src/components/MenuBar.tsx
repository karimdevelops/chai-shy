import { Link } from "@tanstack/react-router";
import useMenuCat from "../hooks/useMenuCat";
import "../styles/Navbar.css";

export default function MenuBar() {
  const menuCat = useMenuCat();

  function activeLink(id: number) {
    return { className: "link-active" };
  }

  return (
    <div className="menubar">
      <nav className="navbar navbar-menu">
        <ul className="flex flex-column flex-gap-20">
          {menuCat.length != 0
            ? menuCat.map((cat) => (
                <li key={cat["id"]} className="nav-li">
                  <Link
                    to={"/menu/$cat"}
                    params={{ cat: `${cat["name"]}`.toLowerCase() }}
                    activeProps={() => activeLink(cat["id"])}
                    className="link-menu"
                  >
                    {cat["name"]}
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </nav>
    </div>
  );
}
