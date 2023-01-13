import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>} />
            <Route path='/details' element={<Home/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes