import React from 'react'

const users = [
  {
    username: 'John Doe',
    images: 'https://randomuser.me/api/portraits/men/32.jpg',
    followers: 1200,
    following: 180,
  },
  {
    username: 'Jane Smith',
    images: 'https://randomuser.me/api/portraits/women/44.jpg',
    followers: 980,
    following: 210,
  },
  {
    username: 'Alex Johnson',
    images: 'https://randomuser.me/api/portraits/men/65.jpg',
    followers: 430,
    following: 95,
  },
  {
    username: 'Emily Brown',
    images: 'https://randomuser.me/api/portraits/women/68.jpg',
    followers: 670,
    following: 150,
  },
];

const AdminUsers = () => {
  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-2  hover:shadow-lg transition duration-200 border border-gray-100"
          >
            <img
              src={user.images}
              alt={user.username}
              className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-violet-100 shadow-sm"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-1">{user.username}</h3>
            <div className="flex gap-4 text-sm text-gray-600 mb-2 cursor-pointer">
              <span className="flex flex-col items-center">
                <span className="font-semibold text-violet-700">{user.followers}</span>
                <span className="text-xs cursor-pointer">Followers</span>
              </span>
              <span className="flex flex-col items-center">
                <span className="font-semibold text-violet-700">{user.following}</span>
                <span className="text-xs cursor-pointer">Following</span>
              </span>
            </div>
            <button className="mt-2 px-4 py-1 bg-violet-600 text-white rounded hover:bg-violet-700 transition text-sm cursor-pointer">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminUsers