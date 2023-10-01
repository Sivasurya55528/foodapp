import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../cartslice/cartSlice'

const Store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})

export default Store;