import React from 'react'
import { useDispatch } from "react-redux";
import  authService  from "../../appwrite/config";
import {logOut} from '../../Store/AuthSlice'

function logoutBtn() {

    const dispatch = useDispatch()

    const logoutHandler = ()=>{
        authService.logOut()
        .then(()=>{
            dispatch(logOut)
        })
    }

  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-200 rounded-full' >
        Log Out
    </button>
  )
}

export default logoutBtn