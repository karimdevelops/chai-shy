import { Link } from "@tanstack/react-router";
import useMenuCat from "../hooks/useMenuCat";
import "../styles/Navbar.css";

export default function MenuBar() {
  const menuCat = useMenuCat();

  return (
    <div className="menubar">
      <nav className="navbar navbar-menu">
        <ul className="flex flex-column flex-gap-20">
          {menuCat.length != 0
            ? menuCat.map((cat) => (
                <li key={cat["id"]} className="nav-li">
                  <Link to={`/menu/${cat["name"]}`.toLowerCase()}>
                    <button id="menuBtn">{cat["name"]}</button>
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </nav>
      <div className="cards">
        <div className="card">
          <img src="/api/uploads" alt="" />
        </div>
      </div>
    </div>
  );
}
