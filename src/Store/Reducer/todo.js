import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// custom data fetch action
export const getToDo = createAsyncThunk("getToDo",async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
})

const initialToDoState = {
    isLoading : false,
    data : [],
    isError : false,
}

const todoSlice = createSlice({
    name : "todo",
    initialState : initialToDoState,
    extraReducers : (builder) => {
        builder.addCase(getToDo.pending,(state) => {
            state.isLoading = true;
        })

        builder.addCase(getToDo.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })

        builder.addCase(getToDo.rejected,(state)=>{
            state.isError = true;
        })
    }
})

export default todoSlice.reducer;

