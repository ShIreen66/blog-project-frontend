const HeroSection = () => {
  return (
    <div className="w-full h-full  p-7">
      <h1 className="text-center text-3xl font-medium">Our Blogs</h1>
      <p className="text-center my-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed?
      </p>
      <div className="mx-auto w-[50%] bg-gray-200 h-13 rounded flex items-center overflow-hidden">

        <i className="ri-search-line h-full aspect-square bg-gray-400 text-3xl text-white p-2"></i>
        <input type="text" className="outline-hidden w-full h-full text-xl px-5" placeholder="Search our Blog by topics or keywords..." />
      </div>
      
    </div>
  );
};

export default HeroSection;
