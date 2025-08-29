import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import postReducer from "../features/postSlice";
import adminReducer from "../features/adminSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    post: postReducer,
    admin: adminReducer,
  },
});

export default store;
