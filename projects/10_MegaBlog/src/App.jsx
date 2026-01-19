import { useEffect, useState } from 'react'
import authservice from './appwrite/auth'
import { useDispatch } from "react-redux";
import { Header,Footer } from './components/index';
import './App.css'
import { login,logOut } from "./Store/AuthSlice";

function App() {
  const [loading , setLoading]=  useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if (userData) {
      dispatch(login({userData}))
      }
      else{
        dispatch(logOut())
      }
    })
    .finally(()=>setLoading(false))
  },
  [dispatch])
  

  return !loading ? (
   <div className='min-h-screen flex  bg-gray-500 content-between'>
      <div className=' block'>
        <Header/>
        <main>
          {/* <Outlet></Outlet> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
  
}

export default App
