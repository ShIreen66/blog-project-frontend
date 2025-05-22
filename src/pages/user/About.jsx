import React from "react";
import Footer from "../../component/Footer";

const About = () => {
  return (
    <>
    <section className="w-full bg-violet-50 py-30 px-40 flex flex-col-reverse md:flex-row items-center justify-between ">
      {/* Left */}
      <div className="w-1/2">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 hover:-translate-y-1">About Us</h2>
        <p className="text-gray-700 text-lg mb-4 transition-transform duration-300 ">
          Welcome to Our Blog — a space where we explore web development, design
          trends, and real-world project tips. Our mission is to simplify <br />
          complex tech topics and make learning fun.
        </p>

        <p className="text-gray-700 text-lg mb-6 transition-transform duration-300 ">
          Created by a passionate team of developers, this blog is for
          beginners, <br />
          self-learners, and professionals looking to stay updated.
        </p>
        <button className="bg-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-800 transition duration-200 hover:scale-105">
          Get in Touch
        </button>
      </div>

      {/* Right */}
      <div className="w-1/2">
        <img
          src="public/people.avif"
          alt="Team working together"
          className="w-full rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
    <Footer />
    </>
  );
  
};

export default About;
