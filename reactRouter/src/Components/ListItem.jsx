import React from "react";
import { NavLink } from "react-router-dom";

export default function ListItem({ itemName, path }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
            isActive ? "text-orange-700" : "text-gray-700"
          } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        {itemName}
      </NavLink>
    </li>
  );
}
