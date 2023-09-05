import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import Todo from "../models/todo"


export type TodoResponse = Todo[]

export const todoApi = createApi({
  reducerPath: 'todo',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005' }),
  endpoints: (builder) => ({
    fetchTodoItem: builder.query({
      query: () => {
        return {
          url: "/todos",
          method: "GET",
        }
      }
    }),
    addTodoItem: builder.mutation<TodoResponse, Todo>({
      query: (todo) => {
        return {
          method: "POST",
          url: "/todos",
          body: {
            id: todo.id,
            text: todo.text,
          }
        }
      }
    }),

    deleteTodoItem: builder.mutation<TodoResponse, Todo>({
      query: (todo) => {
        return {
          method: 'DELETE',
          url: "/todos",
          body: {
            id: todo.id,
          }
        }
      }

    })
  }),

})

export const { useFetchTodoItemQuery, useAddTodoItemMutation, useDeleteTodoItemMutation } = todoApi