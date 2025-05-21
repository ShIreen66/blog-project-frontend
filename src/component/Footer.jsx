import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1d2b34] text-white py-10 px-6 md:px-20">
      
      <div className="blog top grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        
        <div>
          <h1 className="text-2xl font-bold mb-2">XYZ Blog</h1>
          <p className="text-sm text-gray-400 mb-4">
            Simplifying tech, one post at a time.
          </p>
          
          <div className="icons flex space-x-4 text-lg">
            <a href="#" className="hover:text-violet-400" aria-label="Facebook">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className="hover:text-violet-400" aria-label="Twitter">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#" className="hover:text-violet-400" aria-label="Instagram">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="hover:text-violet-400" aria-label="GitHub">
              <i className="ri-github-fill"></i>
            </a>
          </div>
        </div>

        
        <ul className="help">
          <li className="text-xl font-medium mb-2">Help</li>
          <li className="text-sm font-medium">Help Center</li>
          <li>Help Forum</li>
          <li>Video Tutorials</li>
        </ul>

        
        <ul className="community">
          <li className="text-xl font-medium mb-2">Community</li>
          <li>Blogger Buzz</li>
        </ul>

        
        <ul className="developers">
          <li className="text-xl font-medium mb-2">Developers</li>
          <li>Blogger API</li>
          <li>Developer Forum</li>
        </ul>
      </div>

      
      <div className="links grid grid-cols-1 md:grid-cols-2 gap-10 items-start border-t border-white/20 pt-8">
        
        <div className="newsletter">
          <p className="font-medium mb-2">Subscribe to our Newsletter</p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-white bg-black rounded-md sm:rounded-r-none sm:rounded-l-md mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto hover:scale-105"
            />
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        
        <ul className="quick links">
          <li className="text-xl font-medium mb-2">Quick Links</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      
      <div className="copyright mt-10 text-center text-sm text-gray-400">
        <p>
          <i className="ri-copyright-line"></i> Copyright XYZ.com All Rights
          reserved. 2025
        </p>
        <a
          href="#"
          className="inline-block mt-2 hover:text-violet-300 transition"
        >
          ↑ Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
