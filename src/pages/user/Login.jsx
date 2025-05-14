import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="min-h-2/3 flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="md:w-1/2 bg-[url('https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8')] bg-cover bg-center text-white flex flex-col justify-between p-8">
          <div>
            <h1 className="text-3xl font-bold leading-tight mb-2 text-center">
              Lorem, ipsum dolor.
              <br />
              Lorem, ipsum.
            </h1>
            <p className="text-sm text-gray-200 text-center">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div>
            <p className="text-sm text-center text-black ">
              Don't have an account?
            </p>
            <Link
              to="/signup"
              className="mt-2 px-6 py-2 ml-45 bg-white text-black rounded-lg font-semibold text-center hover:bg-gray-200"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full p-8 bg-gray-50 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold  font-[SUSE]">
              Welcome Back!
            </h2>
          </div>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 text-center">
              Login →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
