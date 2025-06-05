import Navigation from "../../component/Navigation";
import ContactUs from "../user/ContactUs";


const UserAbout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-[20%] min-w-[200px] h-screen fixed top-0 left-0 bg-white shadow">
        <Navigation />
      </div>

      <div className="ml-[20%] w-[80%] ">
        <ContactUs />
      </div>
    </div>
  );
};

export default UserAbout;
