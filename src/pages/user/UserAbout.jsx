import Navigation from "../../component/Navigation";
import About from "../user/About";

const UserAbout = () => {
  return (
    <div className="h-[100vh] w-[100vw] overflow-auto flex">
      {/* Sidebar */}
      <div className="w-[20%] h-screen">
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="w-[100%] h-screen ">
        <About />
      </div>
      
    </div>
  );
};

export default UserAbout;
