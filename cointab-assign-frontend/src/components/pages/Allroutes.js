import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import Navbar from '../navbar/Navbar'
import Userdetail from '../userdetail/Userdetail'

const Allroutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>

    <Route path='/' element={<Dashboard/>}/>
    <Route path="/users" element={<Userdetail />} />

    </Routes>
    </>
  )
}

export default Allroutes