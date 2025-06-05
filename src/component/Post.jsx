const posts = [
  {
    img: "/content.avif",
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet hey dolorum consectetur adipisicing elit. officiis dolorum, porro dolore dolores sit ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet hey consectetur adipisicing elit. officiis amet dolorum, porro dolore dolores sit ipsum dolor sit amet consectetur.",
  },
  {
    img: "/content.avif",
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet hey dolorum consectetur adipisicing elit. officiis dolorum, porro dolore dolores sit ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet hey consectetur adipisicing elit. officiis amet dolorum, porro dolore dolores sit ipsum dolor sit amet consectetur.",
  },
  {
    img: "/content.avif",
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet hey dolorum consectetur adipisicing elit. officiis dolorum, porro dolore dolores sit ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet hey consectetur adipisicing elit. officiis amet dolorum, porro dolore dolores sit ipsum dolor sit amet consectetur.",
  },
  {
    img: "/content.avif",
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet hey dolorum consectetur adipisicing elit. officiis dolorum, porro dolore dolores sit ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet hey consectetur adipisicing elit. officiis amet dolorum, porro dolore dolores sit ipsum dolor sit amet consectetur.",
  },
];

const Post = () => {
  return (
    <div className="px-6">
      <div className="w-full h-12 flex justify-center gap-5 items-center mb-6">
        {["POSTS", "SAVED", "TAGGED"].map((tab, idx) => (
          <p
            key={idx}
            className="text-lg font-medium hover:bg-violet-100 rounded-2xl p-2 hover:scale-95 cursor-pointer transition"
          >
            {tab}
          </p>
        ))}
      </div>
      <div className="w-full flex flex-wrap gap-10 justify-start py-10 px-10">
  {posts.map((post, index) => (
    <div
      key={index}
      className="w-[320px] h-[360px] border p-2 rounded-[20px] hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-all duration-300"
    >
      
      <div className="w-full h-40 rounded-[20px] overflow-hidden">
        <img
          src={post.img}
          alt={`Post ${index + 1}`}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-125"
        />
      </div>

      
      <div className="w-full h-1/2 p-2">
        <h2 className="text-[25px] text-center font-semibold">
          {post.title}
        </h2>
        <p className="text-sm text-gray-900 text-left">
          {post.desc}
          <small className="text-blue-500 text-sm cursor-pointer ml-1">
            more...
          </small>
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Post;
