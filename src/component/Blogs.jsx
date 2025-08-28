import React from "react";

const Blogs = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-violet-50 to-violet-100 px-6 sm:px-10 lg:px-20 py-12">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent ">
          Blogs
        </h1>
        <p className="text-lg text-gray-600">
          Bringing you thoughtful stories, one post at a time, to spark ideas and
          start conversations.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Category */}
        <div className="flex items-center gap-3">
          <label htmlFor="category" className="text-lg font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            className="border-none shadow-sm bg-white text-base outline-none px-3 py-2 rounded-xl"
          >
            <option value="All">All</option>
            <option value="education">Education</option>
            <option value="sports">Sports</option>
            <option value="movies">Movies</option>
          </select>
        </div>

        {/* Search & Sort */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="search" className="text-lg font-medium text-gray-700">
              Search
            </label>
            <input
              type="text"
              className="shadow-sm px-3 py-2 rounded-xl text-base bg-white outline-none w-56"
              placeholder="Search blogs..."
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-lg font-medium text-gray-700">
              Sort By
            </label>
            <select
              id="sort"
              className="shadow-sm bg-white text-base outline-none px-3 py-2 rounded-xl"
            >
              <option value="All">All</option>
              <option value="latest">Latest</option>
              <option value="following">Following</option>
            </select>
          </div>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between bg-violet-100 px-4 py-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60"
                  alt="author"
                  className="h-10 w-10 rounded-full object-cover hover:scale-110 transition"
                />
                <p className="font-medium text-gray-800">John Doe</p>
              </div>
              <button className="bg-violet-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-violet-700 transition">
                Follow
              </button>
            </div>

            {/* Blog Image */}
            <img
              src="https://images.unsplash.com/photo-1693774823736-f23de11e8c34?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="blog"
              className="w-full h-48 object-cover hover:scale-110"
            />

            {/* Content */}
            <div className="flex flex-col flex-1 px-4 py-3">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className="text-gray-600 flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                eos! Lorem ipsum dolor sit amet...
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-6 px-4 py-3 border-t bg-violet-50">
              <button className="flex items-center gap-1 text-gray-700 hover:text-red-600 transition">
                <i className="ri-heart-line text-xl"></i> <span>13</span>
              </button>
              <button className="flex items-center gap-1 text-gray-700 hover:text-violet-600 transition">
                <i className="ri-chat-3-line text-xl"></i>
              </button>
              <button className="flex items-center gap-1 text-gray-700 hover:text-violet-600 transition">
                <i className="ri-share-forward-line text-xl"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
