let mockUsers = [
  { id: 1, name: "Alice", role: "user" },
  { id: 2, name: "Bob", role: "user" },
];

let mockPosts = [
  { id: 1, title: "First Post", author: "Alice" },
  { id: 2, title: "Second Post", author: "Bob" },
];

const getUsers = async () => {
  return Promise.resolve(mockUsers);
};

const deleteUser = async (id) => {
  mockUsers = mockUsers.filter((u) => u.id !== id);
  return Promise.resolve({ message: "User deleted" });
};

const getAllPosts = async () => {
  return Promise.resolve(mockPosts);
};

const deletePost = async (id) => {
  mockPosts = mockPosts.filter((p) => p.id !== id);
  return Promise.resolve({ message: "Post deleted" });
};

const adminService = { getUsers, deleteUser, getAllPosts, deletePost };
export default adminService;
