import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "remixicon/fonts/remixicon.css";

const Navigation = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const [postMenuOpen, setPostMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/", icon: "ri-home-8-line", label: "Home" },
    { to: "/blogs", icon: "ri-blogger-line", label: "Blogs" },
    { to: "/about", icon: "ri-information-fill", label: "About Us" },
    { to: "/contact", icon: "ri-contacts-book-3-fill", label: "Contact Us" },
  ];

  const protectedItems = [
    { to: "/post", icon: "ri-edit-2-fill", label: "Post", hasSubmenu: true },
    { to: "/dashboard/profile", icon: "ri-user-3-fill", label: "Profile" },
  ];
// <i class="ri-user-3-fill"></i>
  const postSubMenuItems = [
    { to: "/all-posts", icon: "ri-file-list-line", label: "All Posts" },
    { to: "/create-post", icon: "ri-add-circle-line", label: "Create Post" },
    { to: "/edit-post", icon: "ri-pencil-ruler-2-line", label: "Edit Post" },
  ];

  // Auto-open post menu if current route matches
  useEffect(() => {
    const postRoutes = postSubMenuItems.map((item) => item.to);
    postRoutes.push("/post");
    if (postRoutes.includes(location.pathname)) setPostMenuOpen(true);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    window.location.reload();
  };

  const renderLink = (item, activeClass = "", normalClass = "") => (
    <Link
      to={item.to}
      onClick={() => setMobileOpen(false)}
      className={`${location.pathname === item.to ? activeClass : normalClass} flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300`}
    >
      <i className={`${item.icon} text-xl`}></i>
      <span className="font-medium">{item.label}</span>
    </Link>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-violet-600 text-white shadow">
        <span className="font-bold text-lg flex items-center gap-2">
          <i className="ri-fire-fill"></i> Logo
        </span>
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          <i className={`ri-${mobileOpen ? "close-line" : "menu-line"} text-2xl`}></i>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-gradient-to-b from-violet-200 to-violet-100 text-black shadow-xl flex flex-col justify-between transform transition-transform duration-300 z-50
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Desktop Logo */}
        <div className="hidden md:flex h-20 items-center justify-center text-3xl font-bold text-violet-700">
          <span className="flex items-center gap-2">
            <i className="ri-fire-fill text-violet-600"></i> Logo
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.to}>
                {renderLink(item, "bg-violet-600 text-white shadow-md", "text-gray-700 hover:bg-violet-200 hover:text-violet-800")}
              </li>
            ))}

            {isLoggedIn &&
              protectedItems.map((item) => (
                <li key={item.to}>
                  {item.hasSubmenu ? (
                    <>
                      <button
                        onClick={() => setPostMenuOpen(!postMenuOpen)}
                        className={`w-full flex items-center justify-between px-4 py-2 rounded-xl transition-all duration-300 ${
                          location.pathname.startsWith("/post") ? "bg-violet-600 text-white shadow-md" : "text-gray-700 hover:bg-violet-200 hover:text-violet-800"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <i className={`${item.icon} text-xl`}></i>
                          <span className="font-medium">{item.label}</span>
                        </span>
                        <i className={`ri-arrow-down-s-line transform transition-transform ${postMenuOpen ? "rotate-180" : ""}`}></i>
                      </button>

                      {postMenuOpen && (
                        <ul className="ml-6 mt-2 space-y-2">
                          {postSubMenuItems.map((sub) => (
                            <li key={sub.to}>
                              {renderLink(sub, "bg-violet-500 text-white shadow", "text-gray-600 hover:bg-violet-100 hover:text-violet-800")}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    renderLink(item, "bg-violet-600 text-white shadow-md", "text-gray-700 hover:bg-violet-200 hover:text-violet-800")
                  )}
                </li>
              ))}
          </ul>
        </nav>

        {/* Bottom Buttons */}
        <div className="p-4">
          {!isLoggedIn ? (
            <Link
              to="/signin"
              onClick={() => setMobileOpen(false)}
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
    </>
  );
};

export default Navigation;
