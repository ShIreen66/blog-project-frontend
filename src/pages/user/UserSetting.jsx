import Navigation from "../../component/Navigation";
import ProfileSetting from "./ProfileSetting";

const UserSetting = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="h-full w-[16%]  ">
        <Navigation />
      </div>
      <div className="h-full w-[90%] ">
        <ProfileSetting/>
      </div>
    </div>
  );
};

export default UserSetting;
