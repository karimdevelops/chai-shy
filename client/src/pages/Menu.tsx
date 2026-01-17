import { useEffect } from "react";
import MenuBar from "../components/MenuBar";
import useMenu, { fetchMenu } from "../hooks/useMenu";
import { useRouterState } from "@tanstack/react-router";
import "../styles/Menu.css";

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
              <div
                className="flex flex-column flex-center flex-gap-5 flip-container"
                key={x.id}
              >
                <div className="card flip-card">
                  <div className="flex flex-column flex-center front">
                    <img
                      src={`/api/uploads/${x.name.toLowerCase()}.avif`}
                      alt=""
                      height={165}
                      width={"auto"}
                    />
                    <p className="product-price">${x.price}</p>
                  </div>
                  <div className="flex flex-column flex-center flex-gap-20 back">
                    <p className="info product-info">{x.description}</p>
                    <button className="btn-add-cart">Add to Cart</button>
                  </div>
                </div>
                <p className="product-name">{x.name}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
