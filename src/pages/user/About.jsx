import React from "react";

const About = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-violet-50 to-violet-100 px-6 sm:px-10 lg:px-20 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-snug relative">
            About Us
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-violet-600 rounded-full"></span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-violet-700">Our Blog</span> —
            a space where we explore web development, design trends, and real-world
            project tips. Our mission is to simplify complex tech topics and make
            learning fun.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Created by a passionate team of developers, this blog is for beginners,
            self-learners, and professionals looking to stay updated with the latest
            industry insights.
          </p>

          <button className="bg-violet-600 text-white px-8 py-3 rounded-xl font-medium shadow-md hover:bg-violet-700 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            Get in Touch
          </button>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src="/people.avif"
              alt="Team working together"
              className="w-full rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105"
            />
            {/* Decorative gradient circle */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-violet-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
