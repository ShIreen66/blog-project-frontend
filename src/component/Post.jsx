import { Link } from "react-router-dom";

const posts = [
  {
    img: "/content.avif",
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet hey dolorum consectetur adipisicing elit...",
  },

    {
    img: "/content.avif",
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet hey dolorum consectetur adipisicing elit...",
  },
    {
    img: "/content.avif",
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet hey dolorum consectetur adipisicing elit...",
  },
    {
    img: "/content.avif",
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet hey dolorum consectetur adipisicing elit...",
  },
  
  
];

const Post = () => {
  return (
    <div className="w-full min-h-screen flex bg-gradient-to-b from-violet-50 to-violet-100">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gradient-to-b from-violet-200 to-violet-100 text-black  flex-col justify-between  ">
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent mb-8">
          Dashboard
        </h2>
        <nav className="flex flex-col gap-4">
          <Link
            to="/"
            className="text-lg font-medium px-4 py-2 rounded-lg text-left text-gray-700 hover:bg-violet-100 hover:text-violet-700 transition"
          >
            Home
          </Link>
          <Link
            to="/all-post"
            className="text-lg font-medium px-4 py-2 rounded-lg text-left text-gray-700 hover:bg-violet-100 hover:text-violet-700 transition"
          >
            All Posts
          </Link>
          <Link
            to="/create-post"
            className="text-lg font-medium px-4 py-2 rounded-lg text-left text-gray-700 hover:bg-violet-100 hover:text-violet-700 transition"
          >
            Create Post
          </Link>
          <Link
            to="/edit-post"
            className="text-lg font-medium px-4 py-2 rounded-lg text-left text-gray-700 hover:bg-violet-100 hover:text-violet-700 transition"
          >
            Edit Post
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Welcome...</h2>
        {/* <p>Yaha tum react-router ke <code>Route</code> ke according page content load kar sakte ho.</p> */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden"
            >
              <div className="h-2 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              <div className="w-full h-44 overflow-hidden relative group">
                <img
                  src={post.img}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                  {post.desc}
                  <span className="text-violet-600 font-medium cursor-pointer ml-1 hover:underline">
                    more...
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Post;
