import React, { useState } from "react";
import Footer from "./Footer";

const Blogs = () => {
  const blogs = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: `Blog Title ${i + 1}`,
    author: i % 2 === 0 ? "John Doe" : "Jane Smith",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, doloribus!",
    image:
      "https://images.unsplash.com/photo-1693774823736-f23de11e8c34?q=80&w=765&auto=format&fit=crop",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [authorFilter, setAuthorFilter] = useState("All");
  const blogsPerPage = 6;

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesAuthor =
      authorFilter === "All" ? true : blog.author === authorFilter;
    return matchesSearch && matchesAuthor;
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-violet-50 to-violet-100 ">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto px-6 pt-12 ">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-sm">
          Blogs
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Inspiring stories and ideas to keep you ahead in tech & creativity.
        </p>

        {/* Search + Filter */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder=" Search blogs..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-80 px-4 py-3 rounded-xl border border-violet-300 focus:ring-2 focus:ring-violet-500 outline-none shadow-md bg-white"
          />

          <select
            value={authorFilter}
            onChange={(e) => {
              setAuthorFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-48 px-4 py-3 rounded-xl border border-violet-300 focus:ring-2 focus:ring-violet-500 outline-none shadow-md bg-white"
          >
            <option value="All">All Authors</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
          </select>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="mt-12 px-6 sm:px-10 lg:px-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 flex-1">
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between bg-gradient-to-r from-violet-100 to-fuchsia-100 px-4 py-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60"
                    alt="author"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-violet-200 hover:scale-110 transition"
                  />
                  <p className="font-medium text-gray-800">{blog.author}</p>
                </div>
                <button className="bg-violet-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-violet-700 transition">
                  Follow
                </button>
              </div>

              {/* Image */}
              <img
                src={blog.image}
                alt="blog"
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />

              {/* Content */}
              <div className="flex flex-col flex-1 px-5 py-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 flex-1 line-clamp-3">
                  {blog.description}
                </p>
              </div>

              {/* Footer (actions) */}
              <div className="flex items-center gap-6 px-5 py-3 border-t bg-violet-50">
                <button className="flex items-center gap-1 text-gray-700 hover:text-red-600 transition">
                  <i className="ri-heart-line text-lg"></i> <span>13</span>
                </button>
                <button className="flex items-center gap-1 text-gray-700 hover:text-violet-600 transition">
                  <i className="ri-chat-3-line text-lg"></i>
                </button>
                <button className="flex items-center gap-1 text-gray-700 hover:text-violet-600 transition">
                  <i className="ri-share-forward-line text-lg"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No blogs found matching your search/filter.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center items-center gap-2 px-6 mb-10 ">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-violet-600 text-white rounded-lg disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg transition cursor-pointer ${
                currentPage === i + 1
                  ? "bg-violet-700 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-violet-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-4 py-2 bg-violet-600 text-white rounded-lg disabled:opacity-50 cursor-pointer"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blogs;
