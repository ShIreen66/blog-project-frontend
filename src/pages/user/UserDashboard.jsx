import Navigation from '../../component/Navigation';
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
   return (
    <div className="h-screen w-screen  flex">
      <div className="h-full w-[20%] ">
        <Navigation />
      </div>
      <div className="h-full w-[80%] ">
        <Outlet/>
      </div>
    </div>
  );
}

export default UserDashboard