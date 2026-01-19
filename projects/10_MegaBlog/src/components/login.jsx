import React, { useState } from 'react'
import { Link ,useNavigate } from "react-router-dom";
import { login as authLogin  } from "../Store/AuthSlice";
import { Button ,Input,Input ,Logo } from "./index";
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'


function login() {
const navigate= useNavigate()
const dispatch =useDispatch()
const {register, handleSubmit} = useForm()
const [error ,setError] =useState('')

const login =async (data)=>{
    setError('')
    try {
        const session = await authService.login(data)
        if(session){
            const userData = await authService.getCurrentUser()
            if (userData) dispatch(authLogin(userData))
            navigate('/')
        }
    } catch (error) {
        setError(error.setError)
    }
}


  return (
    <div className='flex items-center w-full justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-200 rounded-xl p-10 border-black/10`}>
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-{100px}'>
                <Logo/>
            </span>
        </div>
        <h2 className='text-center text-2xl font-bold'>Sign-in to Your Account</h2>
        <p className='mt-2 text-center text-base text-black/60'>
        Don't have any Account ?
        <Link
        to='/signup'
        className='font-medium text-primary transition-all duration-200 hover:underline'        >
        Sign Up
        </Link>
        </p>
        {error && <p className='text-red-500 mb-8 text-center'>{error}</p>}

        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input 
                label ="Email"
                placeholder='Enter Your Email'
                type='email'
                {...register('email',{
                    required:true,
                    validate:{
                        matchPattern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.
                        test(value) || 
                        "Enter Address Must Be A Valid"

                    }
                })}
                 />

                 <Input type="password"
                 label='Password'
                 placeholder='Enter Password'
                 {...register('password',{
                    required:true
                 }) } />
                 <Button 
                 type='submit'
                 className='w-full'
                 >
                    SignIn
                 </Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default login