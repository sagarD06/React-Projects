import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App.jsx";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, AboutUs, ContactUs, User, GitHub,GitHubInfo } from "./Components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={GitHubInfo} path="GitHub" element={<GitHub />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
