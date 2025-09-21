import React, { useState } from "react";
import Card from "./Card";

const Following = () => {
  // ✅ Dummy following data
  const [followings] = useState([
    { id: 1, name: "Alice", avatar: "/avatar1.png" },
    { id: 2, name: "Bob", avatar: "/avatar2.png" },
    { id: 3, name: "Charlie", avatar: "/avatar3.png" },
    { id: 4, name: "Diana", avatar: "/avatar4.png" },
    { id: 5, name: "Eve", avatar: "/avatar5.png" },
  ]);

  return (
    <div className="w-full min-h-screen bg-gray-100 px-6 py-6">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <div className="left flex items-center text-2xl font-semibold text-gray-800">
          Followings
          <span className="text-base bg-gray-800 text-white text-center rounded-full cursor-pointer mx-3 px-3 py-1 hover:bg-violet-900 hover:scale-110">
            {followings.length}
          </span>
        </div>

        <div className="right flex items-center bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm w-full md:w-80">
          <i className="ri-search-line text-xl text-gray-500 px-3"></i>
          <input
            type="text"
            className="outline-none w-full text-sm px-2 py-2"
            placeholder="Search Followings"
          />
        </div>
      </div>

      {/* Followings List */}
      <div className="flex flex-col gap-4 p-4">
        {followings.length > 0 ? (
          followings.map((following) => (
            <Card key={following.id} name={following.name} avatar={following.avatar} />
          ))
        ) : (
          <p className="text-center text-gray-500">No followings yet.</p>
        )}
      </div>
    </div>
  );
};

export default Following;
