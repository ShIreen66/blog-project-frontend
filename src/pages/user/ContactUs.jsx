import React from "react";
import Footer from "../../component/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="min-h-[100vh] flex flex-col bg-gradient-to-b from-violet-100 to-violet-50">
        {/* Header Section */}
        <div className="text-center py-12 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Have questions, feedback, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 px-6 sm:px-10 lg:px-20 pb-16">
          {/* Contact Info Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex-1 flex flex-col justify-center border border-gray-100">
            <h2 className="text-2xl font-bold text-violet-700 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-4 text-gray-700">
              <p><i className="ri-map-pin-2-line text-violet-600 text-xl mr-2"></i> 123 Street, New Delhi, India</p>
              <p><i className="ri-phone-line text-violet-600 text-xl mr-2"></i> +91 9876543210</p>
              <p><i className="ri-mail-line text-violet-600 text-xl mr-2"></i> support@example.com</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-violet-600 hover:text-violet-800 text-2xl"><i className="ri-facebook-circle-fill"></i></a>
              <a href="#" className="text-violet-600 hover:text-violet-800 text-2xl"><i className="ri-twitter-x-line"></i></a>
              <a href="#" className="text-violet-600 hover:text-violet-800 text-2xl"><i className="ri-instagram-line"></i></a>
              <a href="#" className="text-violet-600 hover:text-violet-800 text-2xl"><i className="ri-linkedin-fill"></i></a>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex-1 border border-gray-100">
            <h2 className="text-2xl font-bold text-violet-700 mb-6 text-center">Send us a Message</h2>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none transition"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-xl py-3 font-semibold hover:opacity-90 transition-transform transform hover:scale-105 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
