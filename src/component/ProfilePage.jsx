import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      
      <div className="bg-violet-200 w-full px-10 py-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        
        <div className="left w-32 h-32 md:w-40 md:h-40 ml-60">
          <img
            src="/premium_photo.avif"
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-2 border-green-100 "
          />
        </div>

        
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <h3 className="text-2xl font-semibold   ">John Doe</h3>
            <button className="border-2 rounded-md px-4 py-1 text-sm font-medium cursor-pointer hover:bg-violet-300 hover:scale-110">
              Edit Profile
            </button>
            <button className="border-2 rounded-md px-4 py-1 text-sm font-medium cursor-pointer hover:bg-violet-300 hover:scale-110">
              View Archive
            </button>
            <button className="w-10 h-10 border-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-violet-300 hover:scale-110">
              <i className="ri-user-settings-line text-xl"></i>
            </button>
          </div>

          
          <div className="flex gap-6 ml-18 mt-5 ">
            {["posts", "followers", "followings"].map((label, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full hover:scale-125 cursor-pointer">
                  0
                </span>
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="w-[80%] h-[1px] bg-gray-400 my-6 mx-auto" />

      
      <Outlet />
    </div>
  );
};
  


export default ProfilePage;
