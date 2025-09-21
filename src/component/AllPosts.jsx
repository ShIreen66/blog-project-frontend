// AllPosts.jsx
import { useState, useEffect, useRef } from "react";
import Navigation from "./Navigation";

// Mock posts data (30+ posts)
const posts = Array.from({ length: 35 }, (_, i) => {
  const categories = ["React", "JavaScript", "CSS"];
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  ];
  return {
    id: i + 1,
    title: `Post Title ${i + 1}`,
    category: categories[i % categories.length],
    img: images[i % images.length],
    desc: `This is the description for post number ${i + 1}. It contains some example content about ${categories[i % categories.length]}.`,
    date: new Date(new Date().setDate(new Date().getDate() - i)),
  };
});

const AllPosts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("recent"); // default: Recently
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [displayPosts, setDisplayPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile toggle
  const postsPerPage = 8;
  const loader = useRef(null);

  const categories = ["All", ...new Set(posts.map((p) => p.category))];

  const getFilteredPosts = () => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== "All") {
      filtered = filtered.filter((post) => post.category === categoryFilter);
    }

    const now = new Date();
    if (filter === "24h") {
      filtered = filtered.filter(
        (post) => (now - post.date) / (1000 * 60 * 60) <= 24
      );
    } else if (filter === "week") {
      filtered = filtered.filter(
        (post) => (now - post.date) / (1000 * 60 * 60 * 24) <= 7
      );
    } else if (filter === "month") {
      filtered = filtered.filter(
        (post) => (now - post.date) / (1000 * 60 * 60 * 24 * 30) <= 1
      );
    }

    return filtered;
  };

  const filteredPosts = getFilteredPosts();

  useEffect(() => {
    const newPosts = filteredPosts.slice(0, page * postsPerPage);
    setDisplayPosts(newPosts);
  }, [page, searchTerm, filter, categoryFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && displayPosts.length < filteredPosts.length) {
          setPage((prev) => prev + 1);
        }
      },
      { root: null, rootMargin: "20px", threshold: 1.0 }
    );

    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [displayPosts, filteredPosts]);

  useEffect(() => setPage(1), [searchTerm, filter, categoryFilter]);

  return (
    <div className="flex h-[100vh] overflow-hidden ">
      {/* Sidebar */}
      <div
        className={`fixed sm:relative z-20 h-full w-64 bg-white shadow transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
      >
        <Navigation />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6 bg-purple-50">
        {/* Mobile toggle button */}
        <button
          className="sm:hidden mb-4 px-4 py-2 bg-violet-600 text-white rounded-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Close Menu" : "Open Menu"}
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 ">
          <h2 className="text-2xl font-bold text-gray-800">All Posts</h2>
          <input
            type="text"
            placeholder="Search posts..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none w-full sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Category */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                categoryFilter === cat
                  ? "bg-violet-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-violet-100 hover:text-violet-700"
              }`}
            >
              {cat}
            </button>
          ))}

          {/* Time Dropdown */}
          <div className="relative">
            <button
              onClick={() => setTimeDropdownOpen(!timeDropdownOpen)}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 hover:bg-violet-100 text-gray-700 transition-all flex items-center gap-2"
            >
              {filter === "recent"
                ? "Recently"
                : filter === "24h"
                ? "24 Hours"
                : filter === "week"
                ? "Past Week"
                : "Past Month"}
              <i
                className={`ri-arrow-down-s-line transform ${
                  timeDropdownOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>

            {timeDropdownOpen && (
              <ul className="absolute mt-1 bg-white border rounded shadow w-40 z-10">
                {[
                  { key: "recent", label: "Recently" },
                  { key: "24h", label: "24 Hours" },
                  { key: "week", label: "Past Week" },
                  { key: "month", label: "Past Month" },
                ].map((t) => (
                  <li
                    key={t.key}
                    onClick={() => {
                      setFilter(t.key);
                      setTimeDropdownOpen(false);
                    }}
                    className="px-4 py-2 text-gray-700 hover:bg-violet-100 cursor-pointer"
                  >
                    {t.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayPosts.length > 0 ? (
            displayPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-5 flex flex-col"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-40 object-contain rounded-lg mb-3 hover:scale-105 transition-all"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{post.title}</h3>
                <span className="text-xs text-gray-400 mb-2">{post.category}</span>
                <p className="text-sm text-gray-600 flex-1">{post.desc}</p>
                <span className="text-xs text-gray-400 mt-3">
                  {post.date.toDateString()}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No posts found.</p>
          )}
        </div>

        {/* Loader */}
        <div ref={loader} className="text-center py-4 text-gray-500">
          {displayPosts.length < filteredPosts.length ? "Loading more..." : "No more posts"}
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
