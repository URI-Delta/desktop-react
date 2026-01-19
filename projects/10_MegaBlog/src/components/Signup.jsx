import React, { useState } from 'react'
import {useForm } from "react-hook-form";
import authservice from '../appwrite/auth';
import {  Link ,Navigate } from 'react-router-dom';
import {login}  from '../Store/AuthSlice';
import { Button ,Logo } from './index';
import { useDispatch } from 'react-redux';


function Signup() {
    const navigate = Navigate()
    const [error ,setError]= useState()
    const dispatch =useDispatch()
    const {register ,handelSubmit}= useForm()

    const create =async (data)=>{
    setError('')
    try {
        const userData= await authservice.createAccount(data)
        if (userData){
            const userData=await authservice.getCurrentUser()
            if (userData) dispatch(login(userData));
                navigate('/')
        }
    } catch (error) {
        setError(error.setError)
    }
  return (
    <div className='flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl border border-black/10`}>
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full' ><Logo width='100px'/></span>
        </div>
        <h2 className='text-center text-2xl font-bold'>Sign-Up to Create Account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                Allread Have An Account ?
                <Link
                to='/login'
                className='font-medium text-primary transition-all duration-200 hover:underline'        >
                Sign In
                </Link>
                </p>
                {error && <p className='text-red-500 mb-8 text-center'>{error}</p>}

                <form onSubmit={handelSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label = "Full Name :"
                        placeholder='Enter Your Full Name'
                        {...register('name',{required:true,})}
                        />
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
                    Sign Up
                 </Button>

                    </div>
                </form>
        </div>
    </div>
  )
}
}
export default Signup   