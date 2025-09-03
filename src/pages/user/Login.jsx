import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../app/features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });

    // Redux action dispatch
    dispatch(loginUser({ email, password }));

    // ✅ Admin login
    if (email === "admin@me.com" && password === "admin") {
      console.log("Admin login successful - navigating to /admin");
      localStorage.setItem("token", "admin-token"); // Save admin token
      setTimeout(() => navigate("/admin/dashboard"), 100);
      return;
    }

    // ✅ Regular user login
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (existingUser) {
      console.log("User login successful - navigating to /");
      localStorage.setItem("token", JSON.stringify({ email: existingUser.email })); // Save user token
      setTimeout(() => navigate("/"), 100);
    } else {
      console.log("Invalid credentials");
      alert("Invalid email or password!");
    }
  };

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
            <h1 className="text-4xl font-bold leading-tight mb-2 text-center font-[SUSE]">
              Because every thought
              <br />
              deserves a platform
            </h1>
            <p className="text-lg text-gray-200 text-center font-[SUSE]">
              Blogging beyond borders.
            </p>
          </div>
          <div className="z-10 flex flex-col justify-center gap-2">
            <p className="text-sm text-center text-white font-medium font-[SUSE]">
              Don't have an account?
            </p>
            <Link
              to="/signup"
              className="mt-2 px-6 py-2 mx-auto bg-white text-black rounded-lg font-semibold text-center hover:bg-gray-200 font-[SUSE]"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full p-8 bg-gray-50 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold font-[SUSE]">
              Welcome Back!
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#10182874] font-[SUSE]"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#10182874] font-[SUSE]"
              required
            />
            <button
              type="submit"
              className="bg-[#101828] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 font-[SUSE] cursor-pointer"
            >
              Login →
            </button>
            <p className="text-center font-medium text-lg">OR</p>
            <button
              type="button"
              className="p-1 rounded-lg border cursor-pointer border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#10182874] font-[SUSE] font-medium flex justify-center items-center gap-2"
            >
              <img
                className="h-12 rounded-full"
                src="/google_icon.png"
                alt="Google icon"
              />
              <p>Continue with Google</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
