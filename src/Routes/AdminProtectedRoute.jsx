// src/Routes/AdminProtectedRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  // Debug logs
  console.log("AdminProtectedRoute - Current user:", user);
  console.log("AdminProtectedRoute - User role:", user?.role);

  // If no user is logged in, redirect to login
  if (!user) {
    console.log("No user found, redirecting to /signin");
    return <Navigate to="/signin" replace />;
  }

  // If user is not admin, redirect to home
  if (user.role !== "admin") {
    console.log("User is not admin, redirecting to /");
    return <Navigate to="/" replace />;
  }

  console.log("Admin access granted");
  return children;
};

export default AdminProtectedRoute;
