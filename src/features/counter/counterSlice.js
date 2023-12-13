import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByCount: (state, action) => {
            state.count += action.payload
        },
        decrementByCount: (state, action) => {
            state.count -= action.payload
        }
    }
})

export const { increment, decrement, reset, incrementByCount, decrementByCount } = counterSlice.actions;

export default counterSlice.reducer;