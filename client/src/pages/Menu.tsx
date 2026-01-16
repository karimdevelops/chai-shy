import { useEffect } from "react";
import MenuBar from "../components/MenuBar";
import useMenu, { fetchMenu } from "../hooks/useMenu";
import { useRouterState } from "@tanstack/react-router";

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
          ? menu.map((x) => (
              <div className="card flex flex-column flex-center" key={x.id}>
                <img
                  src={`/api/uploads/${x.name.toLowerCase()}.avif`}
                  alt=""
                  height={165}
                  width={"auto"}
                />
                <p className="product-name">{x.name}</p>
                <p className="product-price">${x.price}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
