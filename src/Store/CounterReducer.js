import { createSlice } from "@reduxjs/toolkit";


const initialCounterSlice = {counter : 0, isShow : true}
const counterSlice = createSlice({
    name : "counter",
    initialState : initialCounterSlice,
    reducers : {
        increase(state){
            state.counter++;
        },

        decrease(state){
            state.counter--;
        },

        increaseByFive(state,action){
            state.counter = state.counter + action.payload;
        },

        toggle(state){
            state.isShow = !state.isShow
        },
    },
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;