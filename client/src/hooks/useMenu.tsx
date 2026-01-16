import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

export async function fetchMenu(setData, menuId: number) {
  const response = await fetch("/api/menu/get", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cat_id: menuId }),
  });
  const data = await response.json();
  setData(data);
}

export default function useMenu(id: number) {
  const [menu, setMenu] = useState<Product[]>([]);
  const menuId = id;
  useEffect(() => {
    fetchMenu(setMenu, menuId);
  }, [menuId]);

  return { menu, setMenu };
}
