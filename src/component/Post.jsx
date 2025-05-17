import React from 'react'

const Post = () => {
  return (
    <div>
   <div className="w-full h-20 flex justify-center gap-5 items-center">
        <p className="text-lg font-medium"> POSTS</p>
        <p className="text-lg font-medium"> SAVED</p>
        <p className="text-lg font-medium"> TAGGED</p>
      </div>
      <div className=" w-full min-h-full px-20 flex  gap-10 flex-wrap">
        <div className="w-80 h-110  flex justify-center flex-col items-center p-2 gap-2">
          <img
            src="/content.avif"
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
            src="/content.avif"
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
            src="/content.avif"
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
            src="/content.avif"
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
            src="/content.avif"
            alt=""
            className="w-[60%] aspect-square rounded-4xl object-cover"
          />
          <h2 className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h2>
          <p className="text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo
            eligendi nemo nostrum placeat sapiente earum aperiam aut unde
            quisquam!
          </p>
        </div>
      </div>
        
    </div>
  )
}

export default Post