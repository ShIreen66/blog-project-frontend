import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { email, password } = action.payload;

      // 👉 Admin credentials check
      if (email === "admin@me.com" && password === "admin") {
        state.user = { name: "Admin", email, role: "admin" };
        state.token = "fake-admin-token"; // real project me backend token aayega
        return;
      }

      // 👉 Normal users from localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (existingUser) {
        state.user = { ...existingUser, role: "user" };
        state.token = "fake-user-token";
      } else {
        state.user = null;
        state.token = null;
      }
    },

    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
