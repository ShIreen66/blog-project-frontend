import { Route, Routes } from 'react-router-dom'
import HomeFeed from '../pages/user/HomeFeed'
import Register from '../pages/user/Register'
import Login from '../pages/user/Login'

const MainRoute = () => {
  return (
  <Routes>
    <Route path="/" element={<HomeFeed />} />
    <Route path="/signup" element={<Register />} />
    <Route path="/signin" element={<Login/>} />
    
  </Routes>
  )
}

export default MainRoute