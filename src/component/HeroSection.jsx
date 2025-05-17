import CardHeroSection from "./CardHeroSection";
import SmallHero from "./SmallHero";

const HeroSection = () => {
  return (
    <div className="w-full h-full  border  p-7 overflow-x-hidden">
      <h1 className="text-center text-3xl font-medium">Our Blogs</h1>
      <p className="text-center my-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed?
      </p>
      <div className="mx-auto my-2 w-[50%] bg-gray-200 h-13 rounded flex items-center overflow-hidden">
        {" "}
        <i class="ri-search-line h-full aspect-square bg-gray-400 text-3xl text-white p-2"></i>{" "}
        <input
          type="text"
          className="outline-hidden w-full h-full text-xl px-5"
          placeholder="Search our Blog by topics or keywords..."
        />
      </div>
      <div className="main h-full w-full  p-8 px-13">
        <div className="mainblog w-full h-120 bg-green-500 flex rounded-xl overflow-hidden">
          <div className="left h-full w-1/3  bg-red-300  ">
            <SmallHero
              hight={"h-1/2"}
              category="sports"
              heading="Lorem ipsum dolor sit amet."
              img="https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=600"
            />

            <SmallHero
              hight={"h-1/2"}
              category="education"
              heading="Lorem ipsum dolor sit amet."
              img="https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div className="right h-full w-2/3  bg-amber-400">
            <SmallHero
              hight={"h-full"}
              category="electronics"
              heading="Lorem ipsum dolor sit amet."
              img="https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen  flex  flex-wrap gap-13 p-7">
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
        <CardHeroSection/>
  
      </div>
    </div>
  );
};

export default HeroSection;
