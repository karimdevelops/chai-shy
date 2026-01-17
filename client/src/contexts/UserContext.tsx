import { createContext } from "react";

type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  is_admin: boolean;
  is_staff: boolean;
};

const UserContext = createContext<User | "empty">("empty");
export default UserContext;
