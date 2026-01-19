import React from 'react'
import Header from './comonents/Header/Header'
import Footer from './comonents/Footer/Footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default layout