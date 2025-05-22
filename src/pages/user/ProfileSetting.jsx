const ProfileSetting = () => {
  return (
    <div className="h-screen bg-gray-100 p-2 overflow-x-hidden">
      <div className="w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Profile Setting
        </h1>

        {/* Profile Section */}
        <div className="flex items-center gap-2 mb-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-16 h-16 rounded-full bg-gray-300 object-cover"
          />
          <div>
            <p className="text-lg font-medium">John Doe</p>
            <button className="text-violet-600 hover:underline text-sm">
              Change photo
            </button>
          </div>
        </div>

        {/* Website */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Website
          </label>
          <input
            type="text"
            placeholder="Website"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-violet-700"
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bio
          </label>
          <textarea
            placeholder="Add bio here"
            rows={4}
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-violet-700 resize-none"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <select className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-violet-700">
            <option value="Male" className="hover:bg-violet-300">Male</option>
            <option value="Female">Female</option>
            <option value="Custom">Custom</option>
          </select>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Add email here"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-violet-700"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Add password here"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-violet-700"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-violet-700"
          />
        </div>

        {/* Save Button */}
        <button className="w-full bg-violet-600 text-white py-2 rounded hover:bg-violet-700 transition duration-200">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileSetting;
