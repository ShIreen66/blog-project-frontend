import React from 'react'
import Navigation from '../../component/Navigation';
import ProfilePage from '../../component/ProfilePage';

const UserDashboard = () => {
   return (
    <div className="h-screen w-screen  flex">
      <div className="h-full w-[20%] ">
        <Navigation />
      </div>
      <div className="h-full w-[80%] ">
        <ProfilePage />
      </div>
    </div>
  );vvv
}

export default UserDashboard