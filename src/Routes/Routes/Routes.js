import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../components/Login";
import Register from "../../components/Register";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";
import Category from "../../Pages/Category/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../../Pages/NotFound/NotFound";
import Blog from "../../Pages/Shared/Blog/Blog";
import FAQ from "../../Pages/Shared/FAQ/FAQ";

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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/FAQ",
        element: <FAQ></FAQ>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch("https://graphic-master-server.vercel.app/courseInfo"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://graphic-master-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(
            `https://graphic-master-server.vercel.app/courseInfo/${params.id}`
          ),
        element: <Courses></Courses>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://graphic-master-server.vercel.app/courses/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
