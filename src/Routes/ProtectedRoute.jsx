// src/Routes/ProtectedRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/signin" />;
  }

  if (currentUser.role !== "user" && currentUser.role !== "admin") {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
