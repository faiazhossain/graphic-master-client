import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../components/Login";
import Register from "../../components/Register";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";
import Category from "../../Pages/Category/Category/Category";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/courses",
    element: <Courses></Courses>,
  },
]);
