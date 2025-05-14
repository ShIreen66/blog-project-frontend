import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 p-4">
<<<<<<< HEAD
      <div className="min-h-2/3 flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* <div className="md:w-1/2 bg-[url('https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8')] bg-cover bg-center text-white flex flex-col justify-around p-8"> */}
          
                  <div className="md:w-1/2   text-white flex flex-col p-8 relative justify-around z-10">
=======
      <div className="min-h-2/3 flex flex-col  md:flex-row w-full max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2   text-white flex flex-col p-8 relative justify-around z-10">
>>>>>>> c84929dab14949af5ff4698c20c1d6b709e01f61
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/public/video.mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-[#0000009c] object-cover z-10"></div>
<<<<<<< HEAD
          <div className="z-10">
            <h1 className="text-3xl font-bold leading-tight mb-2 text-center">
=======

          <div className="z-10">
            <h1 className="text-3xl font-bold leading-tight mb-2 text-center font-[SUSE]">
>>>>>>> c84929dab14949af5ff4698c20c1d6b709e01f61
              Lorem, ipsum dolor.
              <br />
              Lorem, ipsum.
            </h1>
            <p className="text-sm text-gray-200 text-center font-[SUSE]">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="z-10 flex flex-col justify-center gap-2">
<<<<<<< HEAD
            <p className="text-sm text-center text-white font-medium">Don't have an account?</p>
            <Link
              to="/signup"
              className="mt-2 px-6 py-2 mx-auto bg-white text-black rounded-lg font-semibold text-center  hover:bg-gray-200  "
=======
            <p className="text-sm text-center text-white font-medium font-[SUSE]">
              Have an account?
            </p>
            <Link
              to="/signup"
              className="mt-2 px-6 py-2 mx-auto bg-white text-black rounded-lg font-semibold text-center  hover:bg-gray-200 font-[SUSE]  "
>>>>>>> c84929dab14949af5ff4698c20c1d6b709e01f61
            >
              Register
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full p-8 bg-gray-50 flex flex-col justify-center">
          <div className="text-center mb-6 ">
            <h2 className="text-2xl font-semibold font-[SUSE]">
              Welcome Back!
            </h2>
          </div>
<<<<<<< HEAD
          <form className="flex flex-col gap-4">
             {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="font-medium">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <i className="ri-mail-line"></i>
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-200"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="font-medium">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <i className="ri-lock-line"></i>
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-200"
                />
              </div>
            </div>
            <button className="mt-2 bg-violet-800 text-white py-3 rounded-lg font-semibold hover:bg-violet-500 transition duration-300">
              Login →
            </button>

          <div className="flex items-center gap-4">
  <hr className="flex-grow border-gray-300" />
  <span className="text-gray-500">or</span>
  <hr className="flex-grow border-gray-300" />
</div>

     <button type="button"
            className="p-3 rounded-lg border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-200">
              Continue with Google
=======
          <form className="flex flex-col gap-2">
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#10182874] font-[SUSE]"
            />
            <label htmlFor="username">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#10182874] font-[SUSE]"
            />
            <button className="bg-[#101828] text-white py-3 rounded-lg font-semibold hover:bg-[#101828a1] transition duration-300 font-[SUSE] cursor-pointer">
              Login →
            </button>
            <p className="text-center font-medium text-lg ">OR</p>
            <button className="p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#10182874] font-[SUSE] font-medium flex justify-center items-center gap-2">
              <img className="h-12 rounded-full" src="/google_icon.png" alt="" /><p>continue with Google</p>
>>>>>>> c84929dab14949af5ff4698c20c1d6b709e01f61
            </button>
          </form>
        </div>
      </div>
    // </div>
  );
};

export default Login;
