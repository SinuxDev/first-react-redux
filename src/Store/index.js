import {configureStore} from "@reduxjs/toolkit"

import CounterReducer from "./CounterReducer"
import AuthReducer from "./AuthReducer";
import todoReducer from "./Reducer/todo";

const store = configureStore({
    reducer : {
        counter : CounterReducer,
        auth : AuthReducer,
        todo : todoReducer,
    },
});


export default store;