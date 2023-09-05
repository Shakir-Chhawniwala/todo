import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { todoApi } from "./api/todoApi";

const store = configureStore({
    reducer: {
     [todoApi.reducerPath] : todoApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(todoApi.middleware)
    }
})

setupListeners(store.dispatch)

export default store