import React from "react";
// import { ReactDOM } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../Body/Body";
import Offers from "../Header/HeaderMenuList/Offers";
import Account from "../Header/HeaderMenuList/Account"
import Help from "../Header/HeaderMenuList/Help";
import Cart from "../Header/HeaderMenuList/cart";
import Location from "../Header/HeaderMenuList/Location"
import RestaurantWrapper from "../RestaurantMenu/restaurantWrapper";
import SearchBox from "../Header/HeaderMenuList/SearchBox";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                path: "/",
                element: <Body />,

            },
            {
                path: "/Location",
                element: <Location />,

            },
            {
                path: "/Offers",
                element: <Offers />,

            },
            {
                path: "/Help",
                element: <Help content="this is the Help component" />,

            },
            {
                path: "/Account",
                element: <Account />,

            },
            {
                path: "/Cart",
                element: <Cart />,

            },
            {
                path: "/RestInfo/:restId",
                element: <RestaurantWrapper />,

            },
            {
                path: "/SearchBox",
                element: <SearchBox />,

            },
        ],
    },
]);

export default Router