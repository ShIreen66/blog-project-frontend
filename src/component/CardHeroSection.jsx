import { useState } from "react";

const CardHeroSection = () => {
  const [followed, setFollowed] = useState(false);

  return (
    <div className="card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 mb-10">
      {/* Blog Image with animation */}
      <div className="overflow-hidden group">
        <img
          src="news.webp"
          alt="Blog Thumbnail"
          className="h-48 w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
          Lorem lorem ipsum dolor sit amet consectetur.
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos
          fugiat pariatur minus magnam!
        </p>

        {/* Author + Action */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          {/* Author */}
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              alt="Author"
              className="h-10 w-10 object-cover rounded-full transition-transform duration-300 hover:scale-125"
            />
            <p className="text-sm font-medium text-gray-700">John Doe</p>
          </div>

          {/* Follow Button */}
          <button
            onClick={() => setFollowed(!followed)}
            className={`text-sm font-medium px-4 py-2 rounded-lg shadow transition-transform duration-300 ${
              followed
                ? "bg-gradient-to-r from-violet-800 to-fuchsia-600 text-white hover:scale-105 cursor-pointer"
                : "bg-gradient-to-r from-violet-800 to-fuchsia-600 text-white hover:scale-105 cursor-pointer"
            }`}
          >
            {followed ? "Followed" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHeroSection;
