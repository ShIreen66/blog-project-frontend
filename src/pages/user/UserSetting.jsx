import Navigation from "../../component/Navigation";
import ProfileSetting from "./ProfileSetting";

const UserSetting = () => {
  return (
    <div className="h-screen w-screen  flex">
      <div className="h-full w-[20%] ">
        <Navigation />
      </div>
      <div className="h-full w-[80%] ">
        <ProfileSetting/>
      </div>
    </div>
  );
};

export default UserSetting;
