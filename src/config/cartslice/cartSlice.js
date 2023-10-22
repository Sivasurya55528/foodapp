import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState: [],
    reducers: {
        addItem: (state, obj) => {
            console.log("item", obj?.payload?.card?.info);
            state.push(obj?.payload?.card);
        },
        clearCart: (state) => {
            return [];
        },

    }
})
export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer

