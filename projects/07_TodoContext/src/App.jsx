import {useEffect, useState } from 'react'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import './App.css'

function App() {
  const[todos , setTodos]= useState([])

  const AddTodo =(todo)=>{
    setTodos((prev)=>[{id:Date.now() ,...todo},...prev]);
  };

  const UpdateTodo = (id ,todo)=>{
    setTodos((prev)=>
      prev.map((prevTodo)=>
        prevTodo.id=== id ? todo : prevTodo
      )
    )
  }

  const DeleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((todo)=>todo.id !== id ) )
  }

  const ToggleComplete= (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=>
    prevTodo.id===id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
    )
   );
  };

useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))
  if (todos?.length) setTodos(todos)
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])


  return (
    <TodoProvider 
    value={{todos,UpdateTodo,DeleteTodo,AddTodo,ToggleComplete}}
    >
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <TodoForm/>
          <div className="flex flex-col gap-3 mt-4">
            {todos.map((todo)=>(
              <TodoItem key={todo.id} todo={todo}/>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
