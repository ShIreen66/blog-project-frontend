const mockUsers = [
  { id: 1, name: "Alice", bio: "Writer", avatar: "👩" },
  { id: 2, name: "Bob", bio: "Developer", avatar: "👨" },
];

const getProfile = async (id) => {
  const user = mockUsers.find((u) => u.id === id);
  return Promise.resolve(user);
};

const updateProfile = async (data) => {
  return Promise.resolve({ ...data });
};

const followUser = async (id) => {
  return Promise.resolve({ message: `Followed user ${id}` });
};

const unfollowUser = async (id) => {
  return Promise.resolve({ message: `Unfollowed user ${id}` });
};

const getAllUsers = async () => {
  return Promise.resolve(mockUsers);
};

const userService = { getProfile, updateProfile, followUser, unfollowUser, getAllUsers };
export default userService;
