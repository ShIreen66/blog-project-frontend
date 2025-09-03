import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "remixicon/fonts/remixicon.css";

const Navigation = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  // Redux user (agar aap use karna chahte ho)
  const user = useSelector((state) => state.auth.user);

  // ✅ sirf token check karo
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const navItems = [
    { to: "/", icon: "ri-home-8-line", label: "Home" },
    { to: "/blogs", icon: "ri-blogger-line", label: "Blogs" },
    { to: "/about", icon: "ri-information-fill", label: "About Us" },
    { to: "/contact", icon: "ri-contacts-book-3-fill", label: "Contact Us" },
  ];

  const protectedItems = [
    { to: "/post", icon: "ri-edit-2-fill", label: " Post" },
    { to: "/profile/setting", icon: "ri-settings-3-fill", label: "Profile Setting" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" }); // agar aapke authSlice me hai
    window.location.reload();
  };

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-violet-200 to-violet-100 text-black flex flex-col justify-between shadow-xl fixed">
      {/* Logo */}
      <div className="h-20 flex items-center justify-center text-3xl font-bold text-violet-700">
        <span className="flex items-center gap-2">
          <i className="ri-fire-fill text-violet-600"></i> Logo
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300
                  ${
                    location.pathname === item.to
                      ? "bg-violet-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-violet-200 hover:text-violet-800"
                  }`}
              >
                <i className={`${item.icon} text-xl`}></i>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}

     
          {isLoggedIn &&
            protectedItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300
                    ${
                      location.pathname === item.to
                        ? "bg-violet-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-violet-200 hover:text-violet-800"
                    }`}
                >
                  <i className={`${item.icon} text-xl`}></i>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      {/* Bottom Buttons */}
      <div className="p-4">
        {!isLoggedIn ? (
          <Link
            to="/signin"
            className="w-full flex items-center justify-center gap-2 bg-violet-600 text-white rounded-xl py-2 text-lg font-medium transition-all duration-300 hover:bg-violet-700 hover:scale-105"
          >
            Signin <i className="ri-arrow-right-line"></i>
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-violet-600 text-white rounded-xl py-2 text-lg font-medium transition-all duration-300 hover:bg-violet-700 hover:scale-105"
          >
            Logout <i className="ri-logout-box-r-line"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
