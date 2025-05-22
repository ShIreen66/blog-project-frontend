import React from "react";
import Footer from "./Footer";

const Blogs = () => {
  return (
    <div className="w-full h-screen overflow-y-auto ">
      <h1 className="text-center pt-6 font-extrabold text-5xl">Blogs</h1>
      <p className="text-center my-5 font-medium text-lg">
        Bringing you thoughtful stories, one post at a time, to spark ideas and
        start conversations.
      </p>
      <div className="w-full h-20  flex justify-between items-center px-15">
        <div className=" flex justify-center items-center gap-3">
          {" "}
          <label htmlFor="category" className="text-lg font-medium">
            Category
          </label>
          <select
            name="category"
            id=""
            className="border text-lg outline-0 px-2 py-1 rounded"
          >
            <option value="All">All</option>
            <option value="education">education</option>
            <option value="sports">sports</option>
            <option value="movies">movies</option>
          </select>
        </div>
        <div className=" flex gap-2 items-center">
          <label htmlFor="search" className="text-lg font-medium">
            Search
          </label>
          <input
            type="text"
            className="border outline-0 px-2 py-1 rounded text-lg font-medium"
            placeholder="Serch by some keywords..."
          />

          <label htmlFor="sort" className="text-lg font-medium">
            Sort By
          </label>
          <select
            name="category"
            id=""
            className="border text-lg outline-0 px-2 py-1 rounded"
          >
            <option value="All">All</option>
            <option value="letest">letest blogs</option>
            <option value="following ">following </option>
          </select>
        </div>
      </div>
      <div className="w-full  flex gap-14  flex-wrap p-6 ">
        <div className="card h-100 w-[30%]  flex flex-col justify-between rounded-xl overflow-hidden shadow-sm hover:bg-violet-50">
          <div className="w-full h-[15%] bg-[#f3f4f6]   flex   gap-2 items-center justify-between px-3 ">
            <div className="h-full flex  gap-2 items-center px-3 ">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
                className="h-[70%] cursor-pointer aspect-square object-cover rounded-full hover:scale-125"
              />
              <p className="text-lg font-medium">name hai </p>
            </div>

            <button className="cursor-pointer text-sm font-medium bg-violet-700 text-white px-3 py-2 rounded hover:bg-violet-900 hover:scale-105">
              Follow
            </button>
            {/* <button className="text-sm font-medium border-blue-300 border-2 px-3 py-2 rounded">unfollow</button> */}
          </div>
          <img
            src="news.webp "
            alt=""
            className="h-[45%] w-[90%] mx-auto rounded object-cover object-center hover:scale-110"
          />
          <h2 className="text-2xl/6 font-bold px-2 py-1 ">
            Lorem lorem ipsum dolor sit. Lorem ipsum Lorem, ipsum.
          </h2>
          <p
            className="text-lg/4 h-[15%]  
             px-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            eos!Lorem Lorem ipsum dolor ...
          </p>

          <div className=" w-full h-[10%] bg-violet-100  flex items-center px-3 gap-3">
            <p className="flex items-center text-xl font-medium gap-1">
              <i class="ri-heart-line text-2xl cursor-pointer"></i> <p>13</p>
            </p>
            <i class="ri-chat-3-line text-2xl cursor-pointer"></i>
            <i class="ri-share-forward-line text-2xl cursor-pointer"></i>
          </div>
        </div>
        <div className="card h-100 w-[30%]  flex flex-col justify-between rounded-xl overflow-hidden shadow-sm">
          <div className="w-full h-[15%] bg-[#f3f4f6]   flex   gap-2 items-center justify-between px-3">
            <div className="h-full flex  gap-2 items-center px-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
                className="h-[70%] cursor-pointer aspect-square object-cover rounded-full"
              />
              <p className="text-lg font-medium">name hai </p>
            </div>

            <button className="cursor-pointer text-sm font-medium bg-blue-300 px-3 py-2 rounded ">
              Follow
            </button>
            {/* <button className="text-sm font-medium border-blue-300 border-2 px-3 py-2 rounded">unfollow</button> */}
          </div>
          <img
            src="news.webp "
            alt=""
            className="h-[45%] w-[90%] mx-auto rounded object-cover object-center"
          />
          <h2 className="text-2xl/6 font-bold px-2 py-1 ">
            Lorem lorem ipsum dolor sit. Lorem ipsum Lorem, ipsum.
          </h2>
          <p
            className="text-lg/4 h-[15%]  
             px-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            eos!Lorem Lorem ipsum dolor ...
          </p>

          <div className=" w-full h-[10%] bg-[#f3f4f6]  flex items-center px-3 gap-3">
            <p className="flex items-center text-xl font-medium gap-1">
              <i class="ri-heart-line text-2xl cursor-pointer"></i> <p>13</p>
            </p>
            <i class="ri-chat-3-line text-2xl cursor-pointer"></i>
            <i class="ri-share-forward-line text-2xl cursor-pointer"></i>
          </div>
        </div>
        <div className="card h-100 w-[30%]  flex flex-col justify-between rounded-xl overflow-hidden shadow-sm">
          <div className="w-full h-[15%] bg-[#f3f4f6]   flex   gap-2 items-center justify-between px-3">
            <div className="h-full flex  gap-2 items-center px-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
                className="h-[70%] cursor-pointer aspect-square object-cover rounded-full"
              />
              <p className="text-lg font-medium">name hai </p>
            </div>

            <button className="cursor-pointer text-sm font-medium bg-blue-300 px-3 py-2 rounded">
              Follow
            </button>
            {/* <button className="text-sm font-medium border-blue-300 border-2 px-3 py-2 rounded">unfollow</button> */}
          </div>
          <img
            src="news.webp "
            alt=""
            className="h-[45%] w-[90%] mx-auto rounded object-cover object-center"
          />
          <h2 className="text-2xl/6 font-bold px-2 py-1 ">
            Lorem lorem ipsum dolor sit. Lorem ipsum Lorem, ipsum.
          </h2>
          <p
            className="text-lg/4 h-[15%]  
             px-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            eos!Lorem Lorem ipsum dolor ...
          </p>

          <div className=" w-full h-[10%] bg-[#f3f4f6]  flex items-center px-3 gap-3">
            <p className="flex items-center text-xl font-medium gap-1">
              <i class="ri-heart-line text-2xl cursor-pointer"></i> <p>13</p>
            </p>
            <i class="ri-chat-3-line text-2xl cursor-pointer"></i>
            <i class="ri-share-forward-line text-2xl cursor-pointer"></i>
          </div>
        </div>
          <div className="card h-100 w-[30%]  flex flex-col justify-between rounded-xl overflow-hidden shadow-sm">
          <div className="w-full h-[15%] bg-[#f3f4f6]   flex   gap-2 items-center justify-between px-3">
            <div className="h-full flex  gap-2 items-center px-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
                className="h-[70%] cursor-pointer aspect-square object-cover rounded-full"
              />
              <p className="text-lg font-medium">name hai </p>
            </div>

            <button className="cursor-pointer text-sm font-medium bg-blue-300 px-3 py-2 rounded">
              Follow
            </button>
            {/* <button className="text-sm font-medium border-blue-300 border-2 px-3 py-2 rounded">unfollow</button> */}
          </div>
          <img
            src="news.webp "
            alt=""
            className="h-[45%] w-[90%] mx-auto rounded object-cover object-center"
          />
          <h2 className="text-2xl/6 font-bold px-2 py-1 ">
            Lorem lorem ipsum dolor sit. Lorem ipsum Lorem, ipsum.
          </h2>
          <p
            className="text-lg/4 h-[15%]  
             px-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            eos!Lorem Lorem ipsum dolor ...
          </p>

          <div className=" w-full h-[10%] bg-[#f3f4f6]  flex items-center px-3 gap-3">
            <p className="flex items-center text-xl font-medium gap-1">
              <i class="ri-heart-line text-2xl cursor-pointer"></i> <p>13</p>
            </p>
            <i class="ri-chat-3-line text-2xl cursor-pointer"></i>
            <i class="ri-share-forward-line text-2xl cursor-pointer"></i>
          </div>
        </div>
          <div className="card h-100 w-[30%]  flex flex-col justify-between rounded-xl overflow-hidden shadow-sm">
          <div className="w-full h-[15%] bg-[#f3f4f6]   flex   gap-2 items-center justify-between px-3">
            <div className="h-full flex  gap-2 items-center px-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
                className="h-[70%] cursor-pointer aspect-square object-cover rounded-full"
              />
              <p className="text-lg font-medium">name hai </p>
            </div>

            <button className="cursor-pointer text-sm font-medium bg-blue-300 px-3 py-2 rounded">
              Follow
            </button>
            {/* <button className="text-sm font-medium border-blue-300 border-2 px-3 py-2 rounded">unfollow</button> */}
          </div>
          <img
            src="news.webp "
            alt=""
            className="h-[45%] w-[90%] mx-auto rounded object-cover object-center"
          />
          <h2 className="text-2xl/6 font-bold px-2 py-1 ">
            Lorem lorem ipsum dolor sit. Lorem ipsum Lorem, ipsum.
          </h2>
          <p
            className="text-lg/4 h-[15%]  
             px-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            eos!Lorem Lorem ipsum dolor ...
          </p>

          <div className=" w-full h-[10%] bg-[#f3f4f6]  flex items-center px-3 gap-3">
            <p className="flex items-center text-xl font-medium gap-1">
              <i class="ri-heart-line text-2xl cursor-pointer"></i> <p>13</p>
            </p>
            <i class="ri-chat-3-line text-2xl cursor-pointer"></i>
            <i class="ri-share-forward-line text-2xl cursor-pointer"></i>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Blogs;
