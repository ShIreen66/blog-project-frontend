import { Route, Routes } from 'react-router-dom'
import HomeFeed from '../pages/user/HomeFeed'
import Register from '../pages/user/Register'
import Login from '../pages/user/Login'
import UserDashboard from '../pages/user/UserDashboard'
import ProfilePage from '../component/ProfilePage'
import Follower from '../component/Follower'
import Following from '../component/Following'
import Post from '../component/Post'

import CreatePost from '../component/CreatePost'
import EditPost from '../component/EditPost'


const MainRoute = () => {
  return (
  <Routes>
    <Route path="/" element={<HomeFeed />} />
    <Route path="/signup" element={<Register />} />
    <Route path="/signin" element={<Login/>} />
    <Route path="/dashboard" element={<UserDashboard/>} >
    <Route path='/dashboard/profile' element={<ProfilePage/>}>
          <Route path='/dashboard/profile/follower' element={<Follower/>}/>
          <Route path='/dashboard/profile/post' element={<Post/>}/>   
          <Route path='/dashboard/profile/post' element={<Post/>}/>
          <Route path='/dashboard/profile/following' element={<Following/>} /> 
    </Route>    
    </Route>
  
     <Route path="/create/post" element={<CreatePost/>} />
     <Route path="/edit/post" element={<EditPost/>} />

  </Routes>
  )
}

export default MainRoute