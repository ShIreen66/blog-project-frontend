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
import ProtectedRoute from "../Routes/ProtectedRoute";
import AdminProtectedRoute from "../Routes/AdminProtectedRoute";

const MainRoute = () => {
  return (
    <Routes>
      {/* Public User Routes */}
      <Route path="/" element={<HomeFeed />} />
      <Route path="/about" element={<UserAbout />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/blogs" element={<SingleBlog />} />
      <Route path="/contact" element={<UserContact />} />

      {/* Protected User Routes */}
      <Route
        path="/create-post"
        element={
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-post"
        element={
          <ProtectedRoute>
            <EditPost />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile/setting"
        element={
          <ProtectedRoute>
            <UserSetting />
          </ProtectedRoute>
        }
      />

      {/* User Dashboard (Protected) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      >
        <Route path="profile" element={<ProfilePage />}>
          <Route path="follower" element={<Follower />} />
          <Route path="post" element={<Post />} />
          <Route path="following" element={<Following />} />
        </Route>
      </Route>

      {/* Admin Dashboard (Admin Protected) */}
      <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        }
      >
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
