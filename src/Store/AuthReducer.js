import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {isLogin : false }
const authSlice = createSlice({
    name : "auth",
    initialState : initialLoginState,
    reducers : {
        login(state){
            state.isLogin = true
        },

        logout(state){
            state.isLogin = false
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;