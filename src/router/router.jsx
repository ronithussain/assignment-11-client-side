import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Service from "../pages/Service";
import AddService from "../pages/AddService";
import MyReviews from "../pages/MyReviews";
import MyService from "../pages/MyService";


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
        {
          path: 'service',
          element:<Service></Service>,
        },
        {
          path: 'add-service',
          element: <AddService></AddService>,
        },
        {
          path: 'my-reviews',
          element: <MyReviews></MyReviews>,
        },
        {
          path: 'my-service',
          element: <MyService></MyService>,
        },
      ]
    },
  ]);

  export default router;
  