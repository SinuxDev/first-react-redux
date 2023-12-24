import {configureStore} from "@reduxjs/toolkit"

import CounterReducer from "./CounterReducer"
import AuthReducer from "./AuthReducer";

const store = configureStore({
    reducer : {
        counter : CounterReducer,
        auth : AuthReducer,
    },
});


export default store;