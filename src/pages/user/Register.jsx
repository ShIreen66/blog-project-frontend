import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="min-h-2/3 flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 text-white flex flex-col p-8 relative justify-around z-10">
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
            <p className="text-sm text-center text-white font-medium">
              Have an account?
            </p>
            <Link
              to="/signin"
              className="mt-2 px-6 py-2 mx-auto bg-white text-black rounded-lg font-semibold text-center hover:bg-gray-200"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full p-8 bg-gray-50 flex flex-col justify-center">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold">Let Us Know You!</h2>
          </div>

          <form className="flex flex-col gap-3">
            {/* Username */}
            <div className="flex flex-col gap-1">
              <label className="font-medium">Username</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <i className="ri-user-fill"></i>
                </span>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-200"
                />
              </div>
            </div>

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
              Register →
            </button>

            <div className="flex items-center gap-4">
              <hr className="flex-grow border-gray-300" />
              <span className="text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button type="button"
            className="p-3 rounded-lg border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-200">
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
