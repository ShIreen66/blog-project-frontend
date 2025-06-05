import React from 'react'

const categories = [
  ['Technology', 34],
  ['Lifestyle', 18],
  ['Travel', 12],
  ['Food', 10],
];

const AdminCategories = () => {
  return (
    <div className="w-full h-full my-6 px-8">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(([name, count], i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 hover:shadow-lg transition duration-200 border border-gray-100"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{name}</h3>
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <span className="mr-2">Posts: {count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminCategories