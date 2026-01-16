import MenuBar from "../components/MenuBar";
import useMenu from "../hooks/useMenu";

type Product = {
  name: string;
  price: number;
};

export default function Menu() {
  const menu: Product[] = useMenu(1);

  return (
    <div className="menubar">
      <MenuBar />
      <div className="cards">
        {menu != null
          ? menu.map((x) => (
              <div className="card flex flex-column flex-center">
                <h4>{x.name}</h4>
                <p>{x.price}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
