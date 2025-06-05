import React from "react";
import Footer from "../../component/Footer";

const About = () => {
  return (
    <>
      <section className="w-full bg-violet-50 px-6 sm:px-10 lg:px-20 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 transition-transform duration-300 hover:-translate-y-1">
            About Us
          </h2>
          <p className="text-gray-700 text-base mb-4">
            Welcome to Our Blog — a space where we explore web development, design
            trends, and real-world project tips. Our mission is to simplify 
            complex tech topics and make learning fun.
          </p>
          <p className="text-gray-700 text-base mb-6">
            Created by a passionate team of developers, this blog is for beginners, 
            self-learners, and professionals looking to stay updated.
          </p>
          <button className="bg-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-800 transition duration-200 transform hover:scale-105">
            Get in Touch
          </button>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2">
          <img
            src="/people.avif"
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
