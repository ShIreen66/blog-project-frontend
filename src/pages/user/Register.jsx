import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="min-h-2/3 flex flex-col  md:flex-row w-full max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2   text-white flex flex-col p-8 relative justify-around z-10">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/public/video.mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-[#0000009c] object-cover z-10"></div>
  
          <div className="z-10">
            <h1 className="text-3xl font-bold leading-tight mb-2 text-center font-[SUSE]">
              Lorem, ipsum dolor.
              <br />
              Lorem, ipsum.
            </h1>
            <p className="text-sm text-gray-200 text-center font-[SUSE]">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="z-10 flex flex-col justify-center gap-2">
            <p className="text-sm text-center text-white font-medium font-[SUSE]">
              Have an account?
            </p>
            <Link
              to="/signin"
              className="mt-2 px-6 py-2 mx-auto bg-white text-black rounded-lg font-semibold text-center  hover:bg-gray-200 font-[SUSE]  "
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full p-8 bg-gray-50 flex flex-col justify-center">
          <div className="text-center mb-6 ">
            <h2 className="text-2xl font-semibold font-[SUSE]">
              Let Us Know You!
            </h2>
          </div>
          <form className="flex flex-col gap-2">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#10182874] font-[SUSE]"
            />
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
              Register →
            </button>
              <p className="text-center font-medium text-lg ">OR</p>
            <button className="p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#10182874] font-[SUSE] font-medium flex justify-center items-center gap-2">
              <img className="h-12 rounded-full" src="/google_icon.png" alt="" /><p>continue with Google</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
