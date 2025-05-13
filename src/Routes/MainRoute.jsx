import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeFeed from '../pages/user/HomeFeed'
import SignUp from '../pages/user/SignUp'
import SignIn from '../pages/user/SignIn'

const MainRoute = () => {
  return (
  <Routes>
    <Route path="/" element={<HomeFeed />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn/>} />
    
  </Routes>
  )
}

export default MainRoute