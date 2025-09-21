// EditPost.jsx
import React, { useRef, useState, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import Navigation from './Navigation';

// Mock categories (for dropdown)
const mockCategories = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js'];

const EditPost = ({ initialPost }) => {
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [heading, setHeading] = useState(initialPost?.heading || '');
  const [content, setContent] = useState(initialPost?.content || '');
  const [category, setCategory] = useState(initialPost?.category || '');
  const [imagePreview, setImagePreview] = useState(initialPost?.image || null);
  const [fileName, setFileName] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile sidebar

  // Autosave to localStorage
  useEffect(() => {
    const timeout = setTimeout(() => {
      const draft = { heading, content, category, image: imagePreview, fileName };
      localStorage.setItem('editPostDraft', JSON.stringify(draft));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [heading, content, category, imagePreview, fileName]);

  const handleFileClick = () => fileInputRef.current.click();
  const handleImageClick = () => imageInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (image) setImagePreview(URL.createObjectURL(image));
  };

  const onEmojiClick = (emojiData) => {
    setContent(prev => prev + emojiData.emoji);
  };

  return (
    <div className="flex h-[100vh] overflow-hidden bg-purple-100">
      {/* Sidebar */}
      <div
        className={`fixed sm:relative z-30 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        }`}
      >
        <Navigation />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-20 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } sm:hidden`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6 flex justify-center items-start relative">
        {/* Mobile toggle button */}
        <button
          className="sm:hidden mb-4 px-4 py-2 bg-violet-600 text-white rounded-lg z-40 fixed top-4 left-4 shadow-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>

        <div className="w-full max-w-2xl space-y-5 mt-12 sm:mt-0">
          <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4 border border-gray-200 relative">
            {/* Header */}
            <div className="text-center pb-3 border-b">
              <h1 className="text-2xl font-bold text-violet-700">✍️ Edit Post</h1>
            </div>

            {/* Category Selection */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-sm"
            >
              <option value="">Select Category</option>
              {mockCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Heading */}
            <input
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              placeholder="Heading"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-sm"
            />

            {/* Content */}
            <textarea
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your story..."
              className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-sm"
            />

            {/* Image/File Preview */}
            {(imagePreview || fileName) && (
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-sm space-y-3">
                {imagePreview && (
                  <div className="relative w-full">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-56 object-cover rounded-lg shadow-md"
                    />
                    <button
                      onClick={() => setImagePreview(null)}
                      className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {fileName && (
                  <div className="flex items-center justify-between bg-white px-3 py-2 rounded border text-sm text-gray-700 shadow">
                    <span>{fileName}</span>
                    <button
                      onClick={() => setFileName('')}
                      className="text-red-500 hover:underline text-xs"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Emoji Picker */}
            {showEmojiPicker && (
              <div className="absolute bottom-32 right-8 z-20 scale-90 w-[280px] drop-shadow-lg">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}

            {/* Toolbar */}
            <div className="flex items-center text-gray-500 gap-3 pt-2">
              {/* Image Upload */}
              <input
                type="file"
                accept="image/*"
                ref={imageInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
              <button
                onClick={handleImageClick}
                title="Upload Image"
                className="p-2 rounded-full hover:bg-violet-100 transition"
              >
                <i className="ri-image-line text-xl"></i>
              </button>

              {/* File Upload */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                onClick={handleFileClick}
                title="Attach File"
                className="p-2 rounded-full hover:bg-violet-100 transition"
              >
                <i className="ri-attachment-line text-xl"></i>
              </button>

              {/* Emoji */}
              <div className="ml-auto">
                <button
                  onClick={() => setShowEmojiPicker(prev => !prev)}
                  title="Emoji"
                  className="p-2 rounded-full hover:bg-violet-100 transition"
                >
                  <i className="ri-emoji-sticker-fill text-xl"></i>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-5 border-t">
              <button className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition shadow-sm">
                Cancel
              </button>
              <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:from-violet-700 hover:to-purple-700 transition transform hover:scale-105 shadow-md">
                Publish 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
