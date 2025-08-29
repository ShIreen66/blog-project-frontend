import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "../services/postService";

// fetch all posts
export const getPosts = createAsyncThunk("post/getAll", async (_, thunkAPI) => {
  try {
    return await postService.getPosts();
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Posts fetch failed"
    );
  }
});

// create post
export const createPost = createAsyncThunk(
  "post/create",
  async (data, thunkAPI) => {
    try {
      return await postService.createPost(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Post create failed"
      );
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    singlePost: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearPostError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      });
  },
});

export const { clearPostError } = postSlice.actions;
export default postSlice.reducer;
