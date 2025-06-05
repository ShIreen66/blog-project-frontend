import Navigation from "../../component/Navigation";
import About from "../user/About";

const UserAbout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-[20%] min-w-[200px] h-screen fixed top-0 left-0 bg-white shadow">
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="ml-[20%] w-[80%] ">
        <About />
      </div>
    </div>
  );
};

export default UserAbout;
