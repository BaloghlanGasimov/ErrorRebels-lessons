import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Shop from './Shop'
import Navbar from './components/Navbar'
import ShopDetailPage from './ShopDetailPage'
import NotFound from './pages/NotFound'

const AppRouter = () => {


  return (
    <BrowserRouter>

      <Navbar />


      <Routes>

        <Route  path='/' element={<Home/>}  />
        <Route  path='*' element={<NotFound/>}  />

        <Route  path='/shop' element={<Shop/>}  />
        <Route path='/shop/:key' element={<ShopDetailPage/>} />

      </Routes>

      
    </BrowserRouter>
  )
}

export default AppRouter