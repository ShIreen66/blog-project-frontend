import React from "react";
import Footer from "./Footer";

const SingleBlog = () => {
  return (
    <div>
      <div className="w-full h-screen overflow-y-auto">
        <h2 className="m-5 text-3xl font-medium  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque
          quibusdam fuga voluptatem quae numquam voluptatum natus ipsa magnam
          vero!
        </h2>
        <div className="flex items-center gap-3 m-5">
          <img
            src="premium_photo.avif"
            alt=""
            className="w-10 aspect-square object-cover rounded-full"
          />
          <h2 className="font-medium text-lg">name hai </h2>
          <p className="text-gray-500 font-medium text-sm">02 may 2025</p>
        </div>
        <div className="w-[80%]  h-[70vh] mx-auto    ">
          {" "}
          <img
            src="content.avif"
            alt=""
            className="w-full  h-full object-cover  mx-auto rounded-4xl hover:scale-y-110 transition "
          />
        </div>
        <p className="m-10 text-justify text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores
          est, optio doloremque natus vero temporibus et asperiores. Sed quod
          nesciunt id nam temporibus, beatae quae! Facere dolorem eos in aperiam
          mollitia placeat ducimus consequuntur! Sit ipsam culpa consequatur
          impedit aliquam aliquid neque corporis omnis quos dolorem molestiae ea
          adipisci, a voluptates explicabo nostrum et error cumque illum
          doloribus labore. Assumenda nobis deserunt et tempore sunt quos
          tenetur aspernatur natus nesciunt dicta. Ratione ad laudantium nam sed
          cum dolor. Dignissimos expedita aperiam dicta eveniet illo sequi porro
          quod. Consequuntur officiis provident quas sit in sapiente ab, tempore
          consectetur. Ratione, exercitationem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste suscipit nesciunt debitis hic
          blanditiis amet modi vero cupiditate repellat quibusdam veniam,
          asperiores unde praesentium. Delectus vero dolores eius, ut illo
          ratione quos.
          <br /> Adipisci dolor ad enim. Dolor nesciunt beatae unde nisi sed eos
          sequi expedita veritatis iusto nobis aut, voluptate illo eaque alias
          possimus sint blanditiis, architecto impedit id ab. Iusto hic incidunt
          perspiciatis earum doloribus ea velit sapiente assumenda molestiae
          facere exercitationem ipsa, cumque quos officiis. Amet impedit, eius
          omnis, in molestias quo explicabo cum ex dolore harum repudiandae qui
          dignissimos magnam facere nesciunt maxime at nemo neque praesentium.
        </p>

        <div className=" w-full h-[5%]   flex items-center px-10 mt-5 gap-3 ">
          <p className="flex items-center text-xl font-medium gap-1">
            <i className="ri-heart-line text-2xl cursor-pointer"></i> <p>13</p>
          </p>
          <i className="ri-chat-3-line text-2xl cursor-pointer"></i>
          <i className="ri-share-forward-line text-2xl cursor-pointer"></i>
        </div>
        <div className="flex mx-10 mb-3  gap-5">
          <img
            src="premium_photo.avif"
            alt=""
            className="h-10 aspect-square object-cover rounded-full"
          />
          <input
            type="text"
            className="border outline-0 w-80 rounded-lg px-3 not-first:"
            placeholder="Add Your own Views"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SingleBlog;
