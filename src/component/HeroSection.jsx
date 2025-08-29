import { Link } from "react-router-dom";
import CardHeroSection from "./CardHeroSection";
import Footer from "./Footer";
import SmallHero from "./SmallHero";
import { MoveLeft } from "lucide-react";

const HeroSection = () => {
  const cards = Array(12).fill(null); // Dummy cards

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-violet-50 to-pink-50 overflow-x-hidden flex flex-col">
      {/* Hero Title */}
      <div className="text-center mt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent relative inline-block">
          Our Blogs
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-violet-600 rounded-full"></span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Discover insights, tips, and stories from different categories.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mx-auto mt-8 w-[90%] md:w-1/2 bg-white/70 backdrop-blur-md shadow-lg rounded-full flex items-center px-4 py-3 border border-violet-200">
        <i className="ri-search-line text-xl text-violet-600"></i>
        <input
          type="text"
          className="w-full outline-none px-3 text-gray-700 bg-transparent"
          placeholder="Search blogs by topics or keywords..."
        />
      </div>

      {/* Featured Blogs Section */}
      <div className="main w-full px-6 md:px-12 mt-14">
        <div className="mainblog w-full h-[450px] flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <SmallHero
              hight="h-1/2"
              category="Sports"
              heading="Breaking records: Latest sports highlights"
              img="https://images.pexels.com/photos/1764934/pexels-photo-1764934.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <SmallHero
              hight="h-1/2"
              category="Education"
              heading="New methods of learning in 2025"
              img="https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>

          {/* Right Section */}
          <div className="md:w-2/3">
            <SmallHero
              hight="h-full"
              category="Electronics"
              heading="Future gadgets that will change your life"
              img="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="w-full flex-1 px-6 md:px-12 mt-16 mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-violet-600 pl-3">
          Latest Posts
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((_, idx) => (
            <CardHeroSection key={idx} />
          ))}
        </div>

        <div className="flex justify-center ">
          <Link
            to="/blogs"
            className="px-4 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition transform"
          >
            More Blogs 
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HeroSection;
