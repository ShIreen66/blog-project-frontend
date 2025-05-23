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
import UserSetting from "../pages/user/UserSetting";
import AdminPosts from "../pages/Admin/AdminPosts";
import AdminHero from "../pages/Admin/AdminHero";
import AdminCategories from "../pages/Admin/AdminCategories";
import AdminComments from "../pages/Admin/AdminComments";
import AdminUsers from "../pages/Admin/AdminUsers";
import AdminAnalytics from "../pages/Admin/AdminAnalytics";
import AdminSettings from "../pages/Admin/AdminSettings";
import AdminLogout from "../pages/Admin/AdminLogout";
// import AdminHero from "../component/AdminHero";

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
          <Route path="/dashboard/profile/post" element={<Post />} />
          <Route path="/dashboard/profile/following" element={<Following />} />
        </Route>
      </Route>
      <Route path="/profile/setting" element={<UserSetting />}></Route>
      <Route path="/admin" element={<AdminDashboard />}>
        <Route path="/admin/dashboard" element={<AdminHero />} />
        <Route path="/admin/posts" element={<AdminPosts />} />
        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/comments" element={<AdminComments />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="/admin/Settings" element={<AdminSettings />} />
        <Route path="/admin/logout" element={<AdminLogout />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
