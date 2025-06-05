const posts = [
  {
    title: "Introduction to Blogging",
    author: "John Doe",
    date: "Apr 21, 2024",
    status: "Published",
  },
  {
    title: "Tips for Writing Engaging Content",
    author: "John Doe",
    date: "Apr 19, 2024",
    status: "Draft",
  },
  {
    title: "How to Optimize Your Blog for SEO",
    author: "John Doe",
    date: "Apr 17, 2024",
    status: "Published",
  },
  {
    title: "The Importance of Social Media Sharing",
    author: "John Doe",
    date: "Apr 16, 2024",
    status: "Published",
  },
];

const AdminPosts = () => {
  return (
    <div className="p-6 bg-gray-100 w-full">
      <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 hover:shadow-lg transition duration-200 border border-gray-100"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">
              {post.title}
            </h3>
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <span className="mr-2">👤 {post.author}</span>
              <span className="ml-auto">📅 {post.date}</span>
            </div>
            <span
              className={`self-start px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                post.status === "Published"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {post.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPosts;
