import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileSetting = () => {
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const defaultImage =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop";
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

    console.log({ bio, gender, email, password, confirmPassword, profileImage });
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 flex justify-center items-start py-8 px-2">
      <form
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8  border border-gray-200 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-violet-700 text-center">
          Profile Settings
        </h1>

        {/* Profile Photo */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative group">
            <img
              src={imagePreview}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-violet-200 shadow-md transition-transform transform group-hover:scale-105"
            />
            <label
              htmlFor="change-photo"
              className="absolute bottom-0 left-0 right-0 bg-violet-600 text-white text-xs font-semibold py-1 px-2 rounded-b-full text-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Change
            </label>
            <input
              id="change-photo"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <button
            type="button"
            onClick={handleRemovePhoto}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition mt-2 md:mt-0"
          >
            Remove Photo
          </button>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Add a short bio..."
            rows={4}
            className="w-full border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none shadow-sm"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <div className="flex gap-6 flex-wrap">
            {["Male", "Female", "Custom"].map((g) => (
              <label key={g} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={gender === g}
                  onChange={(e) => setGender(e.target.value)}
                  className="accent-violet-600"
                />
                <span className="text-gray-700">{g}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-sm"
          />
        </div>
            
        {/* Password */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
            className="w-full border rounded-xl px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-sm"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-10 transform -translate-y-1/2 text-gray-600 cursor-pointer"
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            className="w-full border rounded-xl px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-sm"
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-10 transform -translate-y-1/2 text-gray-600 cursor-pointer"
          >
            {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </span>
        </div> <br />

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:from-violet-700 hover:to-purple-700 transition transform hover:scale-105 shadow-lg"
        >
          Save Changes
        </button>

        <ToastContainer position="top-right" autoClose={3000} />
      </form>
    </div>
  );
};

export default ProfileSetting;
