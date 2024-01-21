import React, { useState } from "react";
import UserContext from "./UserContext";

// STEP 2 To create Context Provoder as below.
// Here childer represents whichever compinents we wrap using UerContextProvider Component
// So all those components will have access to user and setUser.
// we can pass as many state variables as required inside value.

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
