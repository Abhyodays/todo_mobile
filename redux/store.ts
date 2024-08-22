import { configureStore, Store } from "@reduxjs/toolkit";
import todoReducer from './features/todoSlice'
export const store = configureStore({
    reducer:{
        todos: todoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
export type AppStore = typeof store;