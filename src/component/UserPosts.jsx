// import Navigation from "../component/Navigation";
// import AllPosts from "./AllPosts";


// const Post = () => {
//   return (
//     <div className="h-[100vh] w-[100vw] overflow-auto flex">
//       <div className="h-full w-[16%] ">
//         <Navigation />
//       </div>
//       <div className="h-full w-[90%] bg-purple-100">
//         <AllPosts />
//       </div>
//     </div>
//   );
// };

// export default Post;

import { useOutletContext } from "react-router-dom";

const UserPosts = () => {
  const { userPosts } = useOutletContext();

  if (!userPosts.length) {
    return (
      <div className="text-center text-gray-500 text-lg mt-8">
        No posts yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {userPosts.map(post => (
        <div key={post.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-gray-800">{post.title}</h3>
          <p className="text-gray-600 mt-1">{post.content}</p>
          
        </div>
      ))}
    </div>
  );
};

export default UserPosts;

