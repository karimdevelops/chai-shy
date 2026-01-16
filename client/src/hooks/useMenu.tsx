import { useEffect, useState } from "react";

export default function useMenu(id: number) {
  const [menu, setMenu] = useState([]);
  const menuId = id;
  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch("/api/menu/get", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cat_id: menuId }),
      });
      const data = await response.json();
      setMenu(data);
    }

    fetchMenu();
  }, []);

  return menu;
}
