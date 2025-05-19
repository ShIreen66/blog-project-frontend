import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-60 bg-[#1d2b34] text-white">
      <div className="top w-full h-[70%]  flex px-20 py-10 gap-20">
        <ul>
          <li className="text-xl font-medium ">Help</li>
          <li className="text-sm font-medium">Help Center</li>
          <li>Help Forum</li>
          <li>Video Tutorials</li>
        </ul>
        <ul>
          <li className="text-xl font-medium">Community</li>
          <li>Blogger Buzz</li>
        </ul>
        <ul>
          <li className="text-xl font-medium">Developers</li>
          <li>Blogger API</li>
          <li>Developer Forum</li>
        </ul>
      </div>
      <div className="bottom flex justify-center items-center">
        <p><i class="ri-copyright-line"></i> Copyright XYZ.com All Rights reserved. 2025</p>
      </div>
    </div>
  );
};

export default Footer;
