import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1 , text:"hello world"}]
}



export const TOdoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo : (state,action)=>{
            const todo = {
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        RemoveTodo : (state, action)=>{
            state.todos =state.todos.filter((todo)=>todo.id !== action.payload)
        },
        UpdateTodo : (state,action)=>{
            const {id ,text} = action.payload
            const todo =state.todos.find((todo)=>todo.id === id)
            if(todo){
                todo.text =text;
            }
        }
    }
})

export const {addTodo,RemoveTodo ,UpdateTodo } = TOdoSlice.actions

export default TOdoSlice.reducer