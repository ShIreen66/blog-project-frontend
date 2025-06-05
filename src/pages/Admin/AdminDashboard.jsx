
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from './Adminsidebar';
export const DashboardCard = ({ title, count }) => (
  <div className="bg-white rounded shadow p-4 flex-1 text-center">
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-xl font-bold my-2">{count}</h3>
    <button className="text-blue-600 text-sm hover:underline">View Details</button>
  </div>
);



const AdminDashboard =()=>{

  return(
    <div className='flex pl-[240px] '>
         <Sidebar/>
         <Outlet/>
  

    </div>
  )

}



export default  AdminDashboard


