import { createContext } from "react";

const UserContext=createContext({

    name:"Default User",
    loggedInUser: "Default user"
});
export default UserContext;