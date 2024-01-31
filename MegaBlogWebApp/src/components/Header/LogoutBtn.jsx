import React from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  function logoutHandler() {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-6 py-2 rounded-full duration-200 hover: bg-blue-100"
    >
      LogOut
    </button>
  );
}

export default LogoutBtn;
