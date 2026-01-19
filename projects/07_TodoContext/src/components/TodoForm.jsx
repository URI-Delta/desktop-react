import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoForm() {
    const [todo,setTodo]= useState('')
    const {AddTodo}=useTodo('')

    const add=(e)=>{
        e.preventDefault();

        if(!todo.trim())return;

        AddTodo({todo,completed:false})
        setTodo('');
    }


  return (
        <form onSubmit={add} className="flex gap-2">
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        className="flex-1 px-3 py-1 rounded text-white"
      />
      <button className="bg-green-600 px-4 rounded">Add</button>
    </form>
  )
}

export default TodoForm