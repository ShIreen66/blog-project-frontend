import "remixicon/fonts/remixicon.css";

const Navigation = () => {
  return (
    <div className="w-full h-full bg-gray-100 text-black p-5 flex flex-col  justify-between">
      
        <div className="top w-full h-20">Lorem.</div>
        <div>
        <ul className=" p-2 text-lg  ">
          <li className="flex gap-3 items-center">
            <i className="ri-home-8-line text-2xl"></i>
            <p className="font-medium">Home</p>
          </li>
        </ul>
        <ul className=" p-2  text-lg">
          <li className="flex gap-4 items-center">
            <i className="ri-blogger-line text-2xl"></i>
            <p className="font-medium">Blogs</p>
          </li>
        </ul>
        <ul className=" p-2 text-lg">
          <li className="flex gap-4 items-center">
            <i className="ri-information-fill text-2xl"></i>
            <p className="font-medium">About Us</p>
          </li>
        </ul>
        <ul className=" p-2 text-lg">
          <li className="flex gap-4 items-center">
            <i className="ri-contacts-book-3-fill text-2xl"></i>
            <p className="font-medium">Contact Us</p>
          </li>
        </ul>
        </div>
      
      <div className="w-full h-15  flex justify-center items-center  ">
        {/* <button className="h-[80%] bg-green-300 rounded-[10px] py-2 px-3 text-lg font-medium mx-auto">
          Login <i class="ri-arrow-right-line"></i>
        </button> */}
        <div className="w-full h-full flex  items-center justify-center gap-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
            className="h-[70%] aspect-square rounded-full object-cover"
          ></img>
          <p className="font-medium">Umashankar Uikey</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
