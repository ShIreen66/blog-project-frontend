import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";

const ProfileSetting = () => {
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const defaultImage ="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop";
  const [imagePreview, setImagePreview] = useState(defaultImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
      toast.success("Profile photo updated!");
    }
  };

  const handleRemovePhoto = () => {
    setProfileImage(null);
    setImagePreview(defaultImage);
    toast.info("Profile photo removed.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword || !bio || !gender) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    console.log({
      bio,
      gender,
      email,
      password,
      confirmPassword,
      profileImage,
    });

    toast.success("Profile updated successfully!");
  };

  return (
    <div className="h-screen bg-gray-100 p-2 overflow-x-hidden">
      <form
        className="w-2xl mx-auto bg-white shadow-md rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">Profile Setting</h1>

        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={imagePreview}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover bg-gray-300"
          />
          <div className="flex-1">
            <p className="text-lg font-medium">John Doe</p>
          </div>

          <div className="flex flex-col space-y-2 ml-auto">
            <label
                htmlFor="change-photo"
                className="bg-violet-600 text-white text-sm font-medium py-1 px-3 rounded cursor-pointer hover:bg-violet-800 transition"
                title="Change photo"
            >
                Change photo
            </label>
            <button
                type="button"
                onClick={handleRemovePhoto}
                className="bg-violet-700 text-white text-sm font-medium py-1 px-3 rounded hover:bg-violet-900 transition"
                title="Remove photo"
            >
                Remove photo
            </button>
            <input
                id="change-photo"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
            />
            </div>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Add bio here"
            rows={4}
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-violet-700 resize-none"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <div className="flex gap-4">
            {["Male", "Female", "Custom"].map((g) => (
              <label className="flex items-center gap-1" key={g}>
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={gender === g}
                  onChange={(e) => setGender(e.target.value)}
                />
                {g}
              </label>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Add email here"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-violet-700"
          />
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Add password here"
            className="w-full border rounded px-3 py-2 text-sm pr-10 focus:outline-none focus:ring focus:border-violet-700"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 transform -translate-y-1/2 text-gray-600 cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            className="w-full border rounded px-3 py-2 text-sm pr-10 focus:outline-none focus:ring focus:border-violet-700"
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-9 transform -translate-y-1/2 text-gray-600 cursor-pointer"
          >
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </span>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 rounded hover:bg-violet-700 transition duration-200"
        >
          Save Changes
        </button>

        <ToastContainer position="top-right" autoClose={3000} />
      </form>
    </div>
  );
};

export default ProfileSetting;
