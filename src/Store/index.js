import {createSlice} from "@reduxjs/toolkit"

const initialCounterSlice = {counter : 0, isShow : false}
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
    }
})