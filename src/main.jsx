import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "./components/Homepage/Home";
import Singlebook from "./components/Singlebookpage/Singlebook";
import ListedBook from "./components/ListedBook/ListedBook";
import PageToRead from "./components/PageToRead/PageToRead";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbook",
        element: <ListedBook></ListedBook>,
      },
      {
        path: "/pagetoread",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/single&book/:bookId",
        element: <Singlebook></Singlebook>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
