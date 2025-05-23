import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
const AdminHero = () => {
  return (
    <div className="w-[80%] h-full bg-amber-300">
      <div className="top flex justify-between items-center px-10 py-5 ">
        <input
          type="text"
          placeholder="Search"
          className="border outline-0 px-2 py-1 rounded w-80 text-lg font-medium"
        />
        <div className="flex items-center gap-5">
          <IoIosNotifications className="text-3xl" />
          <img
            src="premium_photo.avif"
            alt=""
            srcset=""
            className="h-10 aspect-square object-cover rounded-full"
          />
        </div>
      </div>
      <div className="cards w-full py-5 px-10 bg-red-300 flex justify-around">
      
        <div className="card  h-35 w-60 bg-white rounded-lg shadow-md flex justify-between items-center  overflow-hidden">
          <div className="left h-full w-[35%] bg-red-400 flex justify-center items-center">
            <RiPagesLine className="text-4xl" />
          </div>
          <div className="right h-full w-[65%] bg-green-400 px-5 py-7  flex flex-col justify-between">
            <div>
            
              <h3 className="text-lg font-medium ">Total Post </h3>
              <p>120</p>
            </div>

            <p className="text-sm">View Deatils</p>
          </div>
        </div>
        <div className="card  h-35 w-60 bg-white rounded-lg shadow-md flex justify-between items-center  overflow-hidden">
          <div className="left h-full w-[35%] bg-red-400 flex justify-center items-center">
            <RiPagesLine className="text-4xl" />
          </div>
          <div className="right h-full w-[65%] bg-green-400 px-5 py-7  flex flex-col justify-between">
            <div>
            
              <h3 className="text-lg font-medium ">Total Post </h3>
              <p>120</p>
            </div>

            <p className="text-sm">View Deatils</p>
          </div>
        </div>
        <div className="card  h-35 w-60 bg-white rounded-lg shadow-md flex justify-between items-center  overflow-hidden">
          <div className="left h-full w-[35%] bg-red-400 flex justify-center items-center">
            <RiPagesLine className="text-4xl" />
          </div>
          <div className="right h-full w-[65%] bg-green-400 px-5 py-7  flex flex-col justify-between">
            <div>
            
              <h3 className="text-lg font-medium ">Total Post </h3>
              <p>120</p>
            </div>

            <p className="text-sm">View Deatils</p>
          </div>
        </div>
        <div className="card  h-35 w-60 bg-white rounded-lg shadow-md flex justify-between items-center  overflow-hidden">
          <div className="left h-full w-[35%] bg-red-400 flex justify-center items-center">
            <RiPagesLine className="text-4xl" />
          </div>
          <div className="right h-full w-[65%] bg-green-400 px-5 py-7  flex flex-col justify-between">
            <div>
            
              <h3 className="text-lg font-medium ">Total Post </h3>
              <p>120</p>
            </div>

            <p className="text-sm">View Deatils</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AdminHero;
