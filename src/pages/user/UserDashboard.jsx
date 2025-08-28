import Navigation from '../../component/Navigation';
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
   return (
    <div className="h-[100vh] w-[100vw] overflow-auto flex">
      <div className="h-full w-[16%] ">
        <Navigation />
      </div>
      <div className="h-full w-[90%] ">
        <Outlet/>
      </div>
    </div>
  );
}

export default UserDashboard