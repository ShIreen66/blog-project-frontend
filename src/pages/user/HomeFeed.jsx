import Blogs from "../../component/Blogs";
import HeroSection from "../../component/HeroSection";
import Navigation from "../../component/Navigation";


const HomeFeed = () => {
  return (
    <div className="h-screen w-screen  flex">
      <div className="h-full w-[20%] ">
        <Navigation />
      </div>
      <div className="h-full w-[80%] ">
        <HeroSection />
{/* <SingleBlog/> */}
        <Blogs/>
      </div>
    </div>
  );
};

export default HomeFeed;
