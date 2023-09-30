import React from "react";
// import { ReactDOM } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../Body/Body";
import Offers from "../subMenu/Offers"
import Account from "../subMenu/Account"
import Cart from "../subMenu/Cart"
import Help from "../subMenu/Help"
import Location from "../subMenu/Location"
import RestaurantWrapper from "../RestaurantMenu/restaurantWrapper";
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
                element: <Help />,

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
        ],
    },
]);

export default Router