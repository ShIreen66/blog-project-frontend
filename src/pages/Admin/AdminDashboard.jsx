import {
  FaTachometerAlt,
  FaClipboardList,
  FaFolder,
  FaComments,
  FaUsers,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaBell,
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-gray-900 text-white w-64 min-h-screen p-4 overflow-y-hidden">
    <h1 className="text-xl font-bold mb-6">Admin dashboard</h1>
    <nav className="space-y-3">
      <NavLink to="/admin/dashboard" end className={({ isActive }) => `flex items-center space-x-3 px-3 py-2 rounded ${isActive ? 'bg-gray-800 text-red-500' : 'hover:bg-gray-800'} cursor-pointer`}>
        <FaTachometerAlt />
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/admin/posts" className={({ isActive }) => `flex items-center space-x-3 px-3 py-2 rounded ${isActive ? 'bg-gray-800 text-red-500' : 'hover:bg-gray-800'} cursor-pointer`}>
        <FaClipboardList />
        <span>Posts</span>
      </NavLink>
      <NavLink to="/admin/categories" className={({ isActive }) => `flex items-center space-x-3 px-3 py-2 rounded ${isActive ? 'bg-gray-800 text-red-500' : 'hover:bg-gray-800'} cursor-pointer`}>
        <FaFolder />
        <span>Categories</span>
      </NavLink>
      <NavLink to="/admin/comments" className={({ isActive }) => `flex items-center space-x-3 px-3 py-2 rounded ${isActive ? 'bg-gray-800 text-red-500' : 'hover:bg-gray-800'} cursor-pointer`}>
        <FaComments />
        <span>Comments</span>
      </NavLink>
      <NavLink to="/admin/users" className={({ isActive }) => `flex items-center space-x-3 px-3 py-2 rounded ${isActive ? 'bg-gray-800 text-red-500' : 'hover:bg-gray-800'} cursor-pointer`}>
        <FaUsers />
        <span>Users</span>
      </NavLink>
      <NavLink to="/admin/analytics" className={({ isActive }) => `flex items-center space-x-3 px-3 py-2 rounded ${isActive ? 'bg-gray-800 text-red-500' : 'hover:bg-gray-800'} cursor-pointer`}>
        <FaChartLine />
        <span>Analytics</span>
      </NavLink>
      <NavLink to="/admin/settings" className={({ isActive }) => `flex items-center space-x-3 px-3 py-2 rounded ${isActive ? 'bg-gray-800 text-red-500' : 'hover:bg-gray-800'} cursor-pointer`}>
        <FaCog />
        <span>Settings</span>
      </NavLink>
      <NavLink to="/admin/logout" className={({ isActive }) => `flex items-center space-x-3 px-3 py-2 rounded ${isActive ? 'bg-gray-800 text-red-500' : 'hover:bg-gray-800'} cursor-pointer`}>
        <FaSignOutAlt />
        <span>Logout</span>
      </NavLink>
    </nav>
  </div>
);

const Dashboard = () => (
  <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <div className="  overflow-y-auto">
      <Outlet/>
    </div>
  </div>
);

export default Dashboard;
