import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggediIn] = useState(false);

  //STEP 3 Setting the uaser data here, by calling setUser.
  const { setUser } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    setUser({ userName, password });
    setUserName("");
    setPassword("");
    setLoggediIn(true);
  }
  return (
    <div>
      <h1 style={{fontSize:"2rem"}}>{!loggedIn ? "Login" : "Logged In Successfully!"}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={userName}
          style={{ padding: "5px" }}
          onChange={(event) => setUserName(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          style={{ padding: "5px" }}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
