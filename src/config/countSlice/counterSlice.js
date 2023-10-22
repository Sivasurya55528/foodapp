import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "couterSlice",
    initialState: [],
    reducers: {
        increment: (state, obj) => {
            state += 1;
        },
        decrement: (state) => {
            return [];
        },
    }
});

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer