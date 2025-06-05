import SingleBlogComponent from "../../component/SingleBlog";
import Blogs from "../../component/Blogs";
import HeroSection from "../../component/HeroSection";
import Navigation from "../../component/Navigation";

const SingleBlog = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="h-full w-[20%]">
        <Navigation />
      </div>
      <div className="h-full w-[80%]">
        <SingleBlogComponent />
        <Blogs />
      </div>
    </div>
  );
};

export default SingleBlog;
