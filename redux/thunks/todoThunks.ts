import { createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "../../types/Task";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getFromStorage = async()=>{
    try{
        const jsonValue = await AsyncStorage.getItem("todos");
        return jsonValue != null? JSON.parse(jsonValue):null;
    }
    catch(err){
        throw err;
    }
}
const setIntoStorage = async(todos:Task[])=>{
    try{
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
    }
    catch(err){
        throw err;
    }
}
export const getAllTodos = createAsyncThunk(
  "todos/getAll",
  async(_,{rejectWithValue})=>{
        try{
            const res = await getFromStorage();
            const allTodos = res!=null?res:[];
            return allTodos;
        }
        catch(err){
            console.log("Error in getting all todos.")
            return rejectWithValue("Error in getting all todos.")
        }
  }  
)
export const addTodo = createAsyncThunk(
    "todos/add",
    async(task:Task,{rejectWithValue})=>{
        try{
            const res = await getFromStorage();
            const allTodos = res!=null?res:[];
            allTodos.push(task);
            await setIntoStorage(allTodos);
            return allTodos;
        }
        catch(err){
            console.log("Error in adding a todo.")
            return rejectWithValue("Error in adding a todo.")
        }
    }
)
export const updateTodo = createAsyncThunk(
    "todos/update",
    async(task:Task,{rejectWithValue})=>{
        try{
            const res = await getFromStorage();
            const allTodos:Task[] = res??[];
            const index = allTodos.findIndex(t => t.id===task.id);
            if(index === -1) throw new Error("Todo not found!")
            allTodos[index] = task;
            await setIntoStorage(allTodos);
            return allTodos;
        }
        catch(err){
            console.log("Erron in upadating task:", err);
            rejectWithValue("Error in updating task");
        }
    }
)

export const removeTodo = createAsyncThunk(
    "todos/delete",
    async (id:string) =>{
        try{
            const res = await getFromStorage();
        const allTodos:Task[] = res ?? [];
        const newTodos = allTodos.filter(td => td.id != id);
        await setIntoStorage(newTodos);
        return newTodos;
        }
        catch(err){
            console.log(err)
        }
    }
)