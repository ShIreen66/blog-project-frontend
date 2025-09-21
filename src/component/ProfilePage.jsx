// ProfilePage.jsx
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const ProfilePage = () => {
  // ✅ Generate 15 dummy posts by default
  const dummyPosts = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Post #${i + 1}`,
    content: `This is the content of post #${i + 1}.`
  }));

  const [userPosts, setUserPosts] = useState(dummyPosts);

  const postsCount = userPosts.length;
  const followersCount = 5; // Dummy
  const followingCount = 10; // Dummy

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center">
      
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-violet-200 to-purple-200 w-full md:w-4/5 rounded-3xl shadow-lg px-6 md:px-12 py-8 flex flex-col md:flex-row items-center md:items-start gap-6 mt-6">
        
        {/* Profile Image */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 group">
          <img
            src="/premium_photo.avif"
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg transition-transform transform group-hover:scale-105"
          />
          <span className="absolute bottom-0 left-0 right-0 bg-violet-600 text-white text-xs font-semibold py-1 px-2 rounded-b-full text-center opacity-0 group-hover:opacity-100 cursor-pointer">
            Change
          </span>
        </div>

        {/* Profile Info */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 w-full">
          
          {/* Name & Bio */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">John Doe</h3>
            <p className="text-sm md:text-base text-gray-600 text-center md:text-left">
              Travel enthusiast ✈️ | Photographer 📸 | Coffee lover ☕
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
            <button className="bg-violet-600 text-white px-4 py-1 rounded-md font-medium hover:bg-violet-700 transition transform hover:scale-105">
              Edit Profile
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded-md font-medium hover:bg-gray-300 transition transform hover:scale-105">
              Follow
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded-md font-medium hover:bg-gray-300 transition transform hover:scale-105">
              Message
            </button>
            <Link 
              to="/profile/setting"
              className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-violet-400 hover:text-white transition transform hover:scale-110"
            >
              <i className="ri-user-settings-line text-xl"></i>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-wrap gap-6 mt-4 justify-center md:justify-start w-full">
            {[
              { label: "Posts", count: postsCount, path: "/dashboard/profile/post" },
              { label: "Followers", count: followersCount, path: "/dashboard/profile/follower" },
              { label: "Following", count: followingCount, path: "/dashboard/profile/following" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl px-6 py-3 hover:shadow-2xl hover:scale-105 transition transform"
              >
                <span className="text-lg font-bold text-gray-800">{item.count}</span>
                <span className="text-sm text-gray-500 mt-1">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-4/5 h-[1px] bg-gray-300 my-6" />

      {/* Nested Routes */}
      <div className="w-4/5 px-4 md:px-0 mb-12">
        <Outlet context={{ userPosts }} />
      </div>
    </div>
  );
};

export default ProfilePage;
