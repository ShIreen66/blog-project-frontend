import React from 'react'

const comments = [
  [
    "Tips for Writing Engaging Content",
    "This is very informative and helpful!",
    "Jane Smith",
    "Apr 20, 2024",
  ],
  [
    "Tips for Writing Engaging Content",
    "Great Introduction to the topic.",
    "Alico Johnson",
    "Apr 20, 2024",
  ],
  [
    "Creating a Content Calendar",
    "Thank you for sharing this.",
    "Michael Brown",
    "Apr 18, 2024",
  ],
];

const AdminComments = () => {
  return (
    <section className="mt-6 w-full px-8">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {comments.map(([title, excerpt, author, date], i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 hover:shadow-lg transition duration-200 border border-gray-100"
          >
            <h3 className="text-base font-bold text-gray-800 mb-1 truncate">{title}</h3>
            <p className="text-sm text-gray-600 mb-1">{excerpt}</p>
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <span className="mr-2">👤 {author}</span>
              <span className="ml-auto">📅 {date}</span>
            </div>
            <button className="self-end text-red-600 hover:underline text-xs mt-2">Delete</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdminComments