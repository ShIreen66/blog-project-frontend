const Post = () => {
  return (
    <div >
      <div className="w-full h-20 flex justify-center gap-5 items-center">
        <p className="text-lg font-medium hover:bg-violet-100 rounded-2xl p-2"> POSTS</p>
        <p className="text-lg font-medium hover:bg-violet-100 rounded-2xl p-2"> SAVED</p>
        <p className="text-lg font-medium hover:bg-violet-100 rounded-2xl p-2"> TAGGED</p>
      </div>
      <div className=" w-full min-h-full px-27 flex  gap-10 flex-wrap ">
        <div className="w-75 h-[28rem] flex justify-center flex-col items-center p-2 gap-2 shadow-md shadow-gray-300 hover:shadow-2xl hover:shadow-violet-300 transition duration-300">
          <img
            src="/content.avif"
            alt=""
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h2 className="text-left text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h2>
          <p className="text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo
            eligendi nemo nostrum placeat sapiente earum aperiam aut unde
            quisquam!
          </p>
        </div>
          <div className="w-75 h-[28rem] flex justify-center flex-col items-center p-2 gap-2 shadow-md shadow-gray-300 hover:shadow-2xl hover:shadow-violet-300 transition duration-300">
          <img
            src="/content.avif"
            alt=""
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h2 className="text-left text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h2>
          <p className="text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo
            eligendi nemo nostrum placeat sapiente earum aperiam aut unde
            quisquam!
          </p>
        </div>
           <div className="w-75 h-[28rem] flex justify-center flex-col items-center p-2 gap-2 shadow-md shadow-gray-300 hover:shadow-2xl hover:shadow-violet-300 transition duration-300">
          <img
            src="/content.avif"
            alt=""
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h2 className="text-left text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h2>
          <p className="text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo
            eligendi nemo nostrum placeat sapiente earum aperiam aut unde
            quisquam!
          </p>
        </div>
          <div className="w-75 h-[28rem] flex justify-center flex-col items-center p-2 gap-2 shadow-md shadow-gray-300 hover:shadow-2xl hover:shadow-violet-300 transition duration-300">
          <img
            src="/content.avif"
            alt=""
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h2 className="text-left text-xl">
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
  );
};

export default Post;
