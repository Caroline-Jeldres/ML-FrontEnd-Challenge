/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import PrivateLayout from "./pages/components/PrivateLayout";
import "./style/style.scss";
import ResultSearch from "./pages/Result_search";
import DetailsItems from "./pages/DetailsItem";
import Result from "./pages/Result";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PrivateLayout />}>
      <Route index element={<Result />} />
      <Route path="listado.mercadolibre.cl/:id" element={<ResultSearch />} />
      <Route path="articulo.mercadolibre.cl/:id" element={<DetailsItems />} />
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
