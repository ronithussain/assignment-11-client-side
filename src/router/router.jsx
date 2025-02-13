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
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";


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
          path: 'service-details/:id',
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          // loader: ({params}) => fetch(`http://localhost:8000/services/${params.id}`) // loader diye chesta korew console e dekhay but ui te dekhay na. ki j problem?!
        },
        {
          path: 'add-service',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>,
        },
        {
          path: 'my-reviews',
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
        },
        {
          path: 'my-service',
          element: <PrivateRoute><MyService></MyService></PrivateRoute>,
        },
      ]
    },
  ]);

  export default router;
  