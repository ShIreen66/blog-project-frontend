import React from 'react'

const AdminLogout = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh] p-6 bg-gray-50 w-full">
      <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center gap-4 border border-gray-100 max-w-md w-full">
        <svg className="w-16 h-16 text-red-500 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3l-3-3m0 0l3-3m-3 3h9" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">Logout</h2>
        <p className="text-gray-600 text-center">Are you sure you want to logout from the admin dashboard?</p>
        <div className="flex gap-4 mt-4">
          <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Logout</button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogout