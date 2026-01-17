import { useEffect } from "react";
import MenuBar from "../components/MenuBar";
import useMenu, { fetchMenu } from "../hooks/useMenu";
import { useRouterState } from "@tanstack/react-router";
import "../styles/Menu.css";
import MenuProduct from "../components/MenuProduct";

export default function Menu() {
  const routerState = useRouterState();
  const { menu, setMenu } = useMenu(1);

  useEffect(() => {
    const menuId = Number(routerState.location.pathname.at(-1));
    fetchMenu(setMenu, menuId);
  }, [routerState.location.pathname, setMenu]);

  return (
    <div className="menu-div">
      <MenuBar />
      <div className="cards">
        {menu != null
          ? menu.map((product) => (
              <MenuProduct key={product.id} product={product} />
            ))
          : null}
      </div>
    </div>
  );
}
