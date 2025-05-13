const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      
      {/* Left Section */}
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center text-center p-10 bg-white bg-[url('')]">
        <img src="" className="w-48 h-48 object-cover mb-6" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quos deleniti sit?
        </h1>
        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <small className="text-gray-500 mb-2">Have an account?</small>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Login
        </button>
      </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full p-8 bg-gray-50 flex flex-col justify-center">
          <div className="text-center mb-6">
            
            <h2 className="text-2xl font-semibold">Let Us Know You!</h2>
          </div>
          <form className="flex flex-col gap-4">
             <input
              type="text"
              placeholder="Enter Username"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
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
            <button className="bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
              Register →
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
