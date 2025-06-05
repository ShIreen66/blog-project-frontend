

// export default function AdminPosts() {

  import React from 'react';

const AdminPosts = () => {
  return (
    <div className="w-full h-screen p-6 bg-white overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Posts</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Add New
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <select className="p-2 border rounded w-full">
          <option>All Categories</option>
          <option>Lifestyle</option>
          <option>Marketing</option>
        </select>
        <select className="p-2 border rounded w-full">
          <option>All Authors</option>
          <option>John Doe</option>
        </select>
        <select className="p-2 border rounded w-full">
          <option>Published</option>
          <option>Draft</option>
        </select>
        <input
          type="text"
          placeholder="Search posts"
          className="p-2 border rounded w-full"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-gray-50 rounded-lg shadow">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100 text-left text-sm font-semibold">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Author</th>
              <th className="p-3">Category</th>
              <th className="p-3">Date</th>
              <th className="p-3">Comments</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {posts.map((post, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-100">
                <td className="p-3">
                  <div className="font-medium">{post.title}</div>
                  <div className="text-xs text-gray-500">{post.date}</div>
                </td>
                <td className="p-3">{post.author}</td>
                <td className="p-3">{post.category}</td>
                <td className="p-3">{post.date}</td>
                <td className="p-3">{post.comments}</td>
                <td className="p-3 space-x-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
