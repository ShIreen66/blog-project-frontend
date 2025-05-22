import React from "react";
import Card from "./Card";

const Follower = () => {
  return (
    <div className="w-full h-screen bg-white px-6 py-6 ">
      <div className="w-full flex items-center justify-between mb-6 ">
        <div className="left flex items-center text-2xl font-semibold text-gray-800">
          Followers
          <span className="text-base bg-gray-600 text-white text-center rounded-full cursor-pointer mx-3 px-3 py-1">
            0
          </span>
        </div>

        <div className="right flex items-center bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm w-80">
          <i className="ri-search-line text-xl text-gray-500 px-3"></i>
          <input
            type="text"
            className="outline-none w-full text-sm px-2 py-2 "
            placeholder="Search followers"
          />
        </div>
      </div>

        <div className="flex flex-col gap-4 p-4">  
        <Card />
        <Card />
        <Card />
        <Card />
        
        </div>


      
    </div>
  );
};

export default Follower;
