import React from 'react'

const ContactUs = () => {
  return (
    <div className="min-h-[100vh] flex items-center justify-center bg-violet-50 py-10 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-violet-700 mb-2 text-center">Contact Us</h2>
        <p className="text-gray-600 mb-6 text-center">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
          />
          <button
            type="submit"
            className="bg-violet-600 text-white rounded py-2 font-semibold hover:bg-violet-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs