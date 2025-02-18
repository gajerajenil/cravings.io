const { createContext } = require("react");

const UserContext = createContext({
    LoggedInUser: "Default User"
})

export default UserContext;