import React, { useState } from 'react'
import {useTodo} from '../context'

function TodoItem({todo}){
    const [isTodoEditable,setIsTodoEditable]=useState(false)
    const [TodoMsg,setTodoMsg]=useState(todo.todo)

    const {UpdateTodo,DeleteTodo,ToggleComplete}=useTodo();

    const editTodo = ()=>{
        UpdateTodo(todo.id ,{...todo ,todo:TodoMsg})
        setIsTodoEditable(false)
    }

  return (
      <div
      className={`flex gap-2 p-2 rounded ${
        todo.completed ? "bg-green-200" : "bg-purple-200"
      }`}
       >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={()=>ToggleComplete(todo.id)}
      />

      <input
      value={TodoMsg}
      onChange={(e)=>setTodoMsg(e.target.value)}
      readOnly={!isTodoEditable}
      className={`flex-1 bg-transparent text-black outline-none ${todo.completed ? "line-through" : ""}`}
      />

      <button
      onClick={()=>
        isTodoEditable ? editTodo() : setIsTodoEditable(true)
      }
      disabled={todo.completed}
      >
        {isTodoEditable ? "💾": "✏️"}
      </button>

      <button 
      onClick={()=> DeleteTodo(todo.id) }
      >❌</button>
    </div>
  )
}

export default TodoItem