import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full bg-[#0f172a] text-gray-300  pb-6 px-6 md:px-20 overflow-hidden">
      {/* Curved Top Wave */}
      <div className=" w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-12 text-[#0f172a]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.26,22.18,104.43,29,158,17.39,70-15.65,136-57.46,206-73.59C438.35-26.24,512.77-3.94,583,15.05c69.94,19.06,137.06,39.19,207,21.43,65.28-16.39,127.31-66.5,192-77.81,66.5-11.71,136,14.16,204,29.5V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Top Section */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">XYZ Blog</h1>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Simplifying tech, one post at a time.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            {["facebook-fill", "twitter-fill", "instagram-line", "github-fill"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-violet-400 transition transform hover:scale-110"
              >
                <i className={`ri-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Links</h2>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Blog", "Contact"].map((item, i) => (
              <li key={i} className="relative group cursor-pointer w-fit">
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Resources</h2>
          <ul className="space-y-2 text-sm">
            {["Help Center", "Community", "Privacy Policy", "Terms"].map((item, i) => (
              <li key={i} className="relative group cursor-pointer w-fit">
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
  <h2 className="text-lg font-semibold text-white mb-4">Newsletter</h2>
  <p className="text-sm text-gray-400 mb-3">
    Subscribe to get the latest articles.
  </p>
  <form className="flex flex-col">
    <input
      type="email"
      placeholder="Enter Your Email Here "
      className="p-3 w-full text-gray-200 bg-[#1e293b] rounded-2xl mb-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
    />
    <button
      type="submit"
      className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-2xl transition-transform cursor-pointer"
    >
      Subscribe
    </button>
  </form>
</div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 pt-2 mb-0 text-center text-gray-500 text-sm">
        <p>© 2025 XYZ.com — All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
