import Navigation from "../../component/Navigation";
import ContactUs from "../user/ContactUs";


const UserAbout = () => {
  return (
    <div className="h-[100vh] w-[100vw] overflow-auto flex">
      <div className="w-[20%] h-screen">
        <Navigation />
      </div>

      <div className="w-[100%] h-screen ">
        <ContactUs />
      </div>
    </div>
  );
};

export default UserAbout;
