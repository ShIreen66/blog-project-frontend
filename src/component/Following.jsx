import Card from "./Card";

const Following = () => {
  return (
    <div className="w-full h-screen bg-gray-100 px-6 py-6 ">
      <div className="w-full flex items-center justify-between mb-6">
        <div className="left flex items-center text-2xl font-semibold text-gray-800">
          Followings
          <span className="text-base bg-gray-800 text-white text-center rounded-full cursor-pointer mx-3 px-3 py-1 hover:bg-violet-900 hover:scale-110" >
            0
          </span>
        </div>

        <div className="right flex items-center bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm w-80">
          <i className="ri-search-line text-xl text-gray-500 px-3"></i>
          <input
            type="text"
            className="outline-none w-full text-sm px-2 py-2"
            placeholder="Search Followings"
          />
        </div>
      </div>

        <div className="flex flex-col gap-4 p-4">  
        <Card />
        <Card />
        <Card />
        <Card />
        
        </div>
      
    </div>
  );
};

export default Following;
