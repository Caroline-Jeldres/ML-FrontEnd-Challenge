/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateLayout from "./pages/components/PrivateLayout";
import "./style/style.scss";
import ResultSearch from "./pages/Result_search";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PrivateLayout />}>
      <Route index element={<Home />} />
      <Route path="listado.mercadolibre.cl/:id" element={<ResultSearch />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
