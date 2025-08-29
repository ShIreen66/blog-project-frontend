const login = async (credentials) => {
  // fake login
  return Promise.resolve({
    user: { id: 1, name: "Test User", email: credentials.email },
    token: "fake-jwt-token-123",
  });
};

const register = async (userData) => {
  return Promise.resolve({
    user: { id: 2, name: userData.name, email: userData.email },
    token: "fake-jwt-token-456",
  });
};

const logout = async () => {
  return Promise.resolve(true);
};

const authService = { login, register, logout };
export default authService;
