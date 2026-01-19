import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"to do messege",
            completed:false
        },
    ],
    AddTodo: (todo)=>{},
    UpdateTodo: (id,todo)=>{},
    DeleteTodo: (id)=>{},
    ToggleComplete: (id)=>{},
});

export const useTodo=()=>{
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;