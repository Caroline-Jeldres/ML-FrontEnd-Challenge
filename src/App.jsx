/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/components/Home';
import Login from './pages/components/Login';
import Register from './pages/components/Register';
import PrivateLayout from './pages/PrivateLayout';
import './style/style.scss'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PrivateLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
