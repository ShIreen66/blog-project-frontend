// import SingleBlogComponent from "../../component/SingleBlog";
import Blogs from "../../component/Blogs";
import HeroSection from "../../component/HeroSection";
import Navigation from "../../component/Navigation";

const SingleBlog = () => {
  return (
    <div className="h-[100vh] w-[100vw] overflow-auto flex">
      <div className="h-full w-[16%]">
        <Navigation />
      </div>
      <div className="h-full w-[90%] pl-1">
        {/* <SingleBlogComponent /> */}
        <Blogs />
      </div>
    </div>
  );
};

export default SingleBlog;
