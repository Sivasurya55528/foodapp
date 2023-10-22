import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../cartslice/cartSlice'
import countReducer from '../countSlice/counterSlice'

const Store = configureStore({
    reducer: {
        cart: cartReducer,
        count: countReducer
    },
})

export default Store;