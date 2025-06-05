import {
  FaChartLine,
  FaClipboardList,
  FaCog,
  FaComments,
  FaFolder,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  
  <div className="fixed top-0 left-0 bg-gray-900 text-white w-[240px] h-screen p-4 overflow-y-auto z-50">
    <h1 className="text-xl font-bold mb-6">Admin dashboard</h1>
    <nav className="space-y-3">
      <NavLink
        to="/admin/dashboard"
        end
        className={({ isActive }) =>
          `flex items-center space-x-3 px-3 py-2 rounded ${
            isActive ? "bg-gray-800 text-red-500" : "hover:bg-gray-800"
          } cursor-pointer`
        }
      >
        <FaTachometerAlt />
        <span>Dashboard</span>
      </NavLink>
      <NavLink
        to="/admin/posts"
        className={({ isActive }) =>
          `flex items-center space-x-3 px-3 py-2 rounded ${
            isActive ? "bg-gray-800 text-red-500" : "hover:bg-gray-800"
          } cursor-pointer`
        }
      >
        <FaClipboardList />
        <span>Posts</span>
      </NavLink>
      <NavLink
        to="/admin/categories"
        className={({ isActive }) =>
          `flex items-center space-x-3 px-3 py-2 rounded ${
            isActive ? "bg-gray-800 text-red-500" : "hover:bg-gray-800"
          } cursor-pointer`
        }
      >
        <FaFolder />
        <span>Categories</span>
      </NavLink>
      <NavLink
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center space-x-3 px-3 py-2 rounded ${
            isActive ? "bg-gray-800 text-red-500" : "hover:bg-gray-800"
          } cursor-pointer`
        }
      >
        <FaComments />
        <span>Comments</span>
      </NavLink>
      <NavLink
        to="/admin/users"
        className={({ isActive }) =>
          `flex items-center space-x-3 px-3 py-2 rounded ${
            isActive ? "bg-gray-800 text-red-500" : "hover:bg-gray-800"
          } cursor-pointer`
        }
      >
        <FaUsers />
        <span>Users</span>
      </NavLink>
      <NavLink
        to="/admin/analytics"
        className={({ isActive }) =>
          `flex items-center space-x-3 px-3 py-2 rounded ${
            isActive ? "bg-gray-800 text-red-500" : "hover:bg-gray-800"
          } cursor-pointer`
        }
      >
        <FaChartLine />
        <span>Analytics</span>
      </NavLink>
      <NavLink
        to="/admin/settings"
        className={({ isActive }) =>
          `flex items-center space-x-3 px-3 py-2 rounded ${
            isActive ? "bg-gray-800 text-red-500" : "hover:bg-gray-800"
          } cursor-pointer`
        }
      >
        <FaCog />
        <span>Settings</span>
      </NavLink>
      <NavLink
        to="/admin/logout"
        className={({ isActive }) =>
          `flex items-center space-x-3 px-3 py-2 rounded ${
            isActive ? "bg-gray-800 text-red-500" : "hover:bg-gray-800"
          } cursor-pointer`
        }
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </NavLink>
    </nav>
  </div>
);

export default Sidebar;
