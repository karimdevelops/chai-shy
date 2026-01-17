import { useEffect, useState } from "react";

export default function useGetUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const results = await fetch("/api/user");
      const data = await results.json();
      setUser(data.user);
    }

    fetchUser();
  }, []);

  return user;
}
