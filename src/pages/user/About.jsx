import React from "react";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-violet-50 via-white to-violet-100 px-6 sm:px-10 lg:px-20 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 leading-snug relative">
            About{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Us
            </span>
            <span className="absolute -bottom-3 left-0 w-20 h-1 bg-violet-600 rounded-full"></span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-xl">
            Welcome to{" "}
            <span className="font-semibold text-violet-700">Our Blog</span> — a
            space where we explore{" "}
            <span className="font-medium text-fuchsia-600">
              web development, design trends,
            </span>{" "}
            and real-world project tips. Our mission is to simplify complex tech
            topics and make learning fun.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-xl">
            Created by a passionate team of developers, this blog is for{" "}
            <span className="text-violet-700 font-medium">beginners</span>,{" "}
            <span className="text-violet-700 font-medium">self-learners</span>,
            and professionals looking to stay updated with the latest industry
            insights.
          </p>

        <Link
  to="/contact"
  className="inline-block bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-110"
>
  Get in touch
</Link>

        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="relative w-full max-w-md group">
            <img
              src="/people.avif"
              alt="Team working together"
              className="w-full rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient decorative blobs */}
            <div className="absolute -top-8 -left-8 w-28 h-28 bg-gradient-to-r from-violet-300 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-r from-fuchsia-300 to-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
