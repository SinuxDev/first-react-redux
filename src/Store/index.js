import {createSlice, configureStore} from "@reduxjs/toolkit"

const initialCounterSlice = {counter : 0, isShow : true}
const counterSlice = createSlice({
    name : "counter",
    initialState : initialCounterSlice,
    reducers : {
        increase(){

        },

        decrease(){

        },

        increaseByFive(){

        },

        toggle(){

        },
    },
});

const store = configureStore({
    reducer : counterSlice.reducer
});

export const counterAction = counterSlice.actions

export default store;