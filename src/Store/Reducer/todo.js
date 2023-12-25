import { createSlice } from "@reduxjs/toolkit";

const initialToDoState = {
    isLoading : false,
    data : [],
    isError : false,
}

const todoSlice = createSlice({
    name : "todo",
    initialState : initialToDoState,    
})

export default todoSlice.reducer;

