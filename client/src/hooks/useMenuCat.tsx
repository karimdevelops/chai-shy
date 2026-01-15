import { useEffect, useState } from "react";

export default function useMenuCat() {
  const [menuCat, setMenuCat] = useState([]);

  useEffect(() => {
    async function fetchMenuCats() {
      const response = await fetch("/api/admin/menucats");
      const data = await response.json();
      setMenuCat(data);
    }

    fetchMenuCats();
  }, []);

  return menuCat;
}
