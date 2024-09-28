import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Vansh Kumar",
    email: "kumarvansh16aug@gmail.com",
  },
});
export default UserContext;
