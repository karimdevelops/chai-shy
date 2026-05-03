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
    <div className="grid grid-cols-1 place-items-center gap-15 px-0 py-8 md:grid-cols-[auto_1fr] md:place-items-stretch md:items-start">
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
