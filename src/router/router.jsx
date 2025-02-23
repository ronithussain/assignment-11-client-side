import {
    createBrowserRouter,
  } from "react-router-dom";
  
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ErrorPage from "../pages/errorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
      ]
    },
  ]);

  export default router;
  