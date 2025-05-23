import React from "react";
import { BiCategory, BiComment, BiUser } from "react-icons/bi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { MdLogout } from "react-icons/md";

const AdminNav = () => {
  return (
    <div className="w-[20%] h-full bg-green-400 px-10 py-7 flex flex-col justify-between" >
      <div >
        {" "}
        <h2 className="text-center text-2xl font-medium">Logo</h2>
        <h3 className="text-center text-2xl font-medium py-3">
          Admin Dashboard
        </h3>
      </div>

      <div className="flex flex-col gap-2  text-lg  px-5">
        <p className="flex items-center gap-2">
          <i className="ri-add-box-line"></i>
          <p>Dashboard</p>
        </p>
        <p className="flex items-center gap-2">
          <i className="ri-news-line"></i>
          <p>Posts</p>
        </p>
        <p className="flex items-center gap-2">
          <BiCategory />
          <p>category</p>
        </p>
        <p className="flex items-center gap-2">
          <BiComment />

          <p>Comments</p>
        </p>
        <p className="flex items-center gap-2">
          <BiUser />
          <p>Users</p>
        </p>
        <p className="flex items-center gap-2">
          <TbBrandGoogleAnalytics />
          <p>Analytics</p>
        </p>
        <p className="flex items-center gap-2">
          <CiSettings />
          <p>Setting</p>
        </p>
      </div>
      <button className="mx-auto flex bg-red-400 items-center gap-2 p-2 rounded">
        {" "}
        <MdLogout />
        <p>Logout</p>
      </button>
    </div>
  );
};

export default AdminNav;
