let mockPosts = [
  { id: 1, title: "First Post", content: "Hello world!", author: "Alice" },
  { id: 2, title: "Second Post", content: "Redux Toolkit is awesome!", author: "Bob" },
];

const getPosts = async () => {
  return Promise.resolve(mockPosts);
};

const getPostById = async (id) => {
  return Promise.resolve(mockPosts.find((p) => p.id === id));
};

const createPost = async (data) => {
  const newPost = { id: Date.now(), ...data };
  mockPosts.unshift(newPost);
  return Promise.resolve(newPost);
};

const updatePost = async (id, data) => {
  mockPosts = mockPosts.map((p) => (p.id === id ? { ...p, ...data } : p));
  return Promise.resolve(mockPosts.find((p) => p.id === id));
};

const deletePost = async (id) => {
  mockPosts = mockPosts.filter((p) => p.id !== id);
  return Promise.resolve({ message: "Deleted" });
};

const likePost = async (id) => {
  return Promise.resolve({ message: `Liked post ${id}` });
};

const commentOnPost = async (id, comment) => {
  return Promise.resolve({ postId: id, comment });
};

const postService = { getPosts, getPostById, createPost, updatePost, deletePost, likePost, commentOnPost };
export default postService;
