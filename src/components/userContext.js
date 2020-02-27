import React from "react";

const UserContext = React.createContext("Ram");
//ever context has provider and consumer

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
