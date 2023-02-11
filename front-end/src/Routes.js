import React from "react";
import Home from "./Page/Home/Home";
import Products from "./Page/Products/Products";
import Comments from "./Page/comment/Comments";
import Users from "./Page/Users/Users";
import Ordering from "./Page/Ordering/Ordering";
import Offers from "./Page/Offers/Offers";

let RoutesData = [
  { path: "/", element: <Home /> },
  { path: "/Products", element: <Products /> },
  { path: "/Comments", element: <Comments /> },
  { path: "/Users", element: <Users /> },
  { path: "/Ordering", element: <Ordering /> },
  { path: "/Offers", element: <Offers /> },
];

export default RoutesData
