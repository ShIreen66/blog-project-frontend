import React from 'react';

const settings = [
  {
    label: 'Change Password',
    description: 'Update your account password for security.',
    action: 'Change',
  },
  {
    label: 'Email Notifications',
    description: 'Manage your email notification preferences.',
    action: 'Manage',
  },
  {
    label: 'Profile Visibility',
    description: 'Control who can see your profile information.',
    action: 'Edit',
  },
  {
    label: 'Delete Account',
    description: 'Permanently remove your account and data.',
    action: 'Delete',
    danger: true,
  },
];

const AdminSettings = () => {
  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-semibold mb-6">Admin Settings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {settings.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-xl shadow p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-200"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{item.label}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <button
              type="button"
              className={`mt-4 self-end px-4 py-1 rounded text-sm font-medium transition ${
                item.danger
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-violet-600 text-white hover:bg-violet-700'
              }`}
            >
              {item.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSettings;
