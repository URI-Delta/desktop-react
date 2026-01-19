import React, { useEffect, useState } from 'react'

import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({
    children,
    Authentication =true
}) {

    const navigate= useNavigate()
    const [loader ,setLoader] =useState(true)
    const AuthStatus = useSelector(state => state.auth.status)

    useEffect(()=>{
        if (Authentication &&  AuthStatus != Authentication) {
            navigate('/login')
        } else if (!Authentication && AuthStatus != Authentication){
            navigate('/')
        }
        setLoader(false)

    },[AuthStatus,navigate,Authentication])
    
  return loader ?<h1>Loading...</h1> : <>{children}</>
    
  
}
