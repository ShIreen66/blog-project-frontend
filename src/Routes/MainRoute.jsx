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
import UserSetting from "../pages/user/UserSetting";
import AdminPosts from "../pages/Admin/AdminPosts";
import AdminHero from "../pages/Admin/AdminHero";
import AdminCategories from "../pages/Admin/AdminCategories";
import AdminComments from "../pages/Admin/AdminComments";
import AdminUsers from "../pages/Admin/AdminUsers";
import AdminAnalytics from "../pages/Admin/AdminAnalytics";
import AdminSettings from "../pages/Admin/AdminSettings";
import AdminLogout from "../pages/Admin/AdminLogout";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import UserAbout from "../pages/user/UserAbout";
import SingleBlog from "../pages/user/SingleBlog";
import UserContact from "../pages/user/UserContact";

const MainRoute = () => {
  return (
    <Routes>
      {/* User Routes */}
      <Route path="/" element={<HomeFeed />} /> // kaam ho gaya
      <Route path="/about" element={<UserAbout />} /> // kaam ho gaya
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/edit-post" element={<EditPost />} />
      <Route path="/profile/setting" element={<UserSetting />} />
      <Route path="/blogs" element={<SingleBlog />} /> // kaam ho gaya
      <Route path="/contact" element={<UserContact />} /> // kaam ho gaya

      {/* User Dashboard with nested routes */}
      <Route path="/dashboard" element={<UserDashboard />}>
        <Route path="profile" element={<ProfilePage />}>
          <Route path="follower" element={<Follower />} />
          <Route path="post" element={<Post />} />
          <Route path="following" element={<Following />} />
        </Route>
      </Route>

      {/* Admin Dashboard and all admin pages as nested routes */}
      <Route path="/admin" element={<AdminDashboard />}>
        <Route path="dashboard" element={<AdminHero />} />
        <Route path="posts" element={<AdminPosts />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="comments" element={<AdminComments />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="logout" element={<AdminLogout />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;