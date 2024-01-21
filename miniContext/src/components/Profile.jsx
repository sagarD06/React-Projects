import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
    //STEP 4 data usage by using below syntax.
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div>
        <h1>Please Login!!</h1>
      </div>
    );
  return (
    <>
      <h1>Welcome {user.userName}</h1>
    </>
  );
}
