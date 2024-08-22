import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types/Task";
import { addTodo, getAllTodos, updateTodo } from "../thunks/todoThunks";

const INITIAL_STATE:Task[]= [];

const todoSlice = createSlice({
    name:"tasks",
    initialState:INITIAL_STATE,
    reducers:{
    },
    extraReducers(builder) {
        builder.addCase(getAllTodos.fulfilled, (state,action)=>{
            return action.payload;
        })
        .addCase(addTodo.fulfilled,(state,action)=>{
            return action.payload
        })
        .addCase(updateTodo.fulfilled, (state, action)=>{
            return action.payload
        })
    },
})

export const {} = todoSlice.actions;
export default todoSlice.reducer;
