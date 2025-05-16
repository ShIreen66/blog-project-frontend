import React from "react";

const ProfilePage = () => {
  return (
    <div className="h-full w-full  overflow-y-auto">
      <div className="bg-gray-300 w-full h-50 px-30 flex">
        <div className="left h-full w-[30%] flex flex-col justify-center items-center gap-3">
          <img
            src="premium_photo.avif"
            alt=""
            className="w-[60%] aspect-square rounded-full object-cover"
          />
        </div>

        <div className="right h-full w-[60%] flex flex-col justify-center  items-center ">
          <div className="w-full h-full flex justify-center gap-5  items-center">
            <h3 className="font-medium font-[SUSE] text-2xl ">John Doe</h3>
            <button className="bg-transparent border-2 rounded-4xl h-10 w-25 my-3 mt-3 font-medium  ">
              Edit Profile{" "}
            </button>
            <button className="bg-transparent border-2 rounded-4xl h-10 w-25 my-3 mt-3 font-medium ">
              View Archive
            </button>
            <p className="rounded-full border-2 object-cover aspect-square h-10 mx-6 my-4  flex justify-center items-center">
              <i className="ri-user-settings-line text-2xl"></i>
            </p>
          </div>

          <div className="w-full h-full flex justify-center gap-5 items-center">
            <p className="text-lg">
              {" "}
              <p className="text-lg bg-gray-800 text-white text-center rounded-4xl ">
                0
              </p>{" "}
              posts
            </p>
            <p className="text-lg">
              {" "}
              <p className="text-lg bg-gray-800 text-white text-center rounded-4xl cursor-pointer">
                0
              </p>{" "}
              followers
            </p>
            <p className="text-lg">
              {" "}
              <p className="text-lg bg-gray-800 text-white text-center rounded-4xl cursor-pointer">
                {" "}
                0
              </p>{" "}
              followings
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[1px] bg-green-950 mt-10 mx-auto  "></div>

      <div className="w-full h-20 flex justify-center gap-5 items-center">
        <p className="text-lg font-medium"> POSTS</p>
        <p className="text-lg font-medium"> SAVED</p>
        <p className="text-lg font-medium"> TAGGED</p>
      </div>
      <div className=" w-full min-h-full px-20 flex  gap-10 flex-wrap">
        <div className="w-80 h-110  flex justify-center flex-col items-center p-2 gap-2">
          <img
            src="content.avif"
            alt=""
            className="w-[60%] aspect-square rounded-4xl object-cover"
          />
          <h2 className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h2>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo
            eligendi nemo nostrum placeat sapiente earum aperiam aut unde
            quisquam!
          </p>
        </div>
        <div className="w-80 h-110  flex justify-center flex-col items-center p-2 gap-2">
          <img
            src="content.avif"
            alt=""
            className="w-[60%] aspect-square rounded-4xl object-cover"
          />
          <h2 className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h2>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo
            eligendi nemo nostrum placeat sapiente earum aperiam aut unde
            quisquam!
          </p>
        </div>
        <div className="w-80 h-110  flex justify-center flex-col items-center p-2 gap-2">
          <img
            src="content.avif"
            alt=""
            className="w-[60%] aspect-square rounded-4xl object-cover"
          />
          <h2 className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h2>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo
            eligendi nemo nostrum placeat sapiente earum aperiam aut unde
            quisquam!
          </p>
        </div>
        <div className="w-80 h-110  flex justify-center flex-col items-center p-2 gap-2">
          <img
            src="content.avif"
            alt=""
            className="w-[60%] aspect-square rounded-4xl object-cover"
          />
          <h2 className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h2>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo
            eligendi nemo nostrum placeat sapiente earum aperiam aut unde
            quisquam!
          </p>
        </div>
        <div className="w-80 h-110  flex justify-center flex-col items-center p-2 gap-2">
          <img
            src="content.avif"
            alt=""
            className="w-[60%] aspect-square rounded-4xl object-cover"
          />
          <h2 className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h2>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo
            eligendi nemo nostrum placeat sapiente earum aperiam aut unde
            quisquam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


