import { Route, Routes } from "react-router-dom";
import HomeFeed from "../pages/user/HomeFeed";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import UserDashboard from "../pages/user/UserDashboard";
import ProfilePage from "../component/ProfilePage";
import Follower from "../component/Follower";
import Following from "../component/Following";
import Post from "../component/Post";
import CreatePost from "../component/CreatePost";
import EditPost from "../component/EditPost";
import About from "../pages/user/About";
import AdminDashboard from "../pages/Admin/AdminDashboard";
// import ProfileSetting from "../pages/user/ProfileSetting";
import UserSetting from "../pages/user/UserSetting";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeFeed />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/create/post" element={<CreatePost />} />
      <Route path="/edit/post" element={<EditPost />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/dashboard" element={<UserDashboard />}>
        <Route path="/dashboard/profile" element={<ProfilePage />}>
          <Route path="/dashboard/profile/follower" element={<Follower />} />
          {/* <Route path="/dashboard/profile/post" element={<Post />} /> */}
          <Route path="/dashboard/profile/post" element={<Post />} />
          <Route path="/dashboard/profile/following" element={<Following />} />
        </Route>
      </Route>

      <Route path="/profile/setting" element={<UserSetting />}></Route>
    </Routes>
  );
};

export default MainRoute;
