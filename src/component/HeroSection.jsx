import CardHeroSection from "./CardHeroSection";
// import Footer from "./Footer";
import SmallHero from "./SmallHero";

const HeroSection = () => {
  const cards = Array(12).fill(null); // 12 cards for example

  return (
    <div className="w-full min-h-screen bg-violet-50 overflow-x-hidden flex flex-col">
      {/* Hero Title */}
      <div className="text-center mt-10 ">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent ">
          Our Blogs
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Discover insights, tips, and stories from different categories.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mx-auto mt-6 w-[90%] md:w-1/2 bg-white shadow-md rounded-full flex items-center overflow-hidden px-4 py-2">
        <i className="ri-search-line text-2xl text-violet-600"></i>
        <input
          type="text"
          className="w-full outline-none px-4 py-2 text-gray-700"
          placeholder="Search blogs by topics or keywords..."
        />
      </div>

      {/* Featured Blogs Section */}
      <div className="main w-full px-6 md:px-12 mt-10">
        <div className="mainblog w-full h-[400px] flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <SmallHero
              hight="h-1/2"
              category="Sports"
              heading="Breaking records: Latest sports highlights"
              img="https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <SmallHero
              hight="h-1/2"
              category="Education"
              heading="New methods of learning in 2025"
              img="https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>

          {/* Right Section */}
          <div className="md:w-2/3">
            <SmallHero
              hight="h-full"
              category="Electronics"
              heading="Future gadgets that will change your life"
              img="https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="w-full flex-1 px-6 md:px-12 mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Latest Posts</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((_, idx) => (
            <CardHeroSection key={idx} />
          ))}
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default HeroSection;
