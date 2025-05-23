import React from "react";
import { BiCategory, BiComment, BiUser } from "react-icons/bi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

const AdminNav = () => {
  return (
    <div className="w-[20%] h-full bg-green-400">
      <h2>Logo</h2>
      <h3>Admin Dashboard</h3>
      <p className="flex">
        <i className="ri-add-box-line"></i>
        <p>Dashboard</p>
      </p>
      <p className="flex">
        <i className="ri-news-line"></i>
        <p>Posts</p>
      </p>
      <p className="flex">
        <BiCategory />
        <p>category</p>
      </p>
      <p className="flex">
        <BiComment />

        <p>Comments</p>
      </p>
      <p className="flex">
        <BiUser/>
        <p>Users</p>
      </p>
      <p className="flex">
      <TbBrandGoogleAnalytics />
        <p>Analytics</p>
      </p>
    </div>
  );
};

export default AdminNav;
