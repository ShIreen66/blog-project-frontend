import React from "react";
import AdminNav from "../../component/AdminNav";
import AdminHero from "../../component/AdminHero";

const AdminDashboard = () => {
  return (
    <div className="w-screen h-screen bg-red-300 flex">
      <AdminNav />
      <AdminHero />
    </div>
  );
};

export default AdminDashboard;
