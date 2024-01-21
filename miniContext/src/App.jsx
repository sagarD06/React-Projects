import React from 'react';
import "./App.css";
import UserContextProvider from './context/UserContextProvider';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {


  return (
    <>
      <h1 style={{ color: "purple", fontSize: "3rem"}}>Context Api in React 1.O.</h1>
      <UserContextProvider>
        <Login />
        <hr/>
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
