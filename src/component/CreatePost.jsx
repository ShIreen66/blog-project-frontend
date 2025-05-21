import React, { useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const CreatePost = () => {
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [content, setContent] = useState('');
  const [heading, setHeading] = useState('');

  const handleFileClick = () => fileInputRef.current.click();
  const handleImageClick = () => imageInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('File uploaded:', file);
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    console.log('Image uploaded:', image);
  };

  const onEmojiClick = (emojiData) => {
    setContent(prev => prev + emojiData.emoji);
  };

  return (
    <div className="w-full min-h-screen bg-violet-200 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 space-y-4 border border-gray-200 relative">

        
        <div className="header text-center pb-2">
          <h1 className="text-xl font-semibold text-gray-800">Create Post</h1>
        </div>

        
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          placeholder="Heading"
          className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
        <textarea
          rows={9}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write here..."
          className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-400"
        />

        
        {showEmojiPicker && (
          <div className="absolute bottom-28 right-6 z-20 scale-90 w-[250px]">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}

        
        <div className="flex items-center text-gray-500 gap-2">
          
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
            className="p-2 rounded hover:bg-violet-200 transition duration-150"
          >
            <i className="ri-image-line text-xl"></i>
          </button>

          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={handleFileClick}
            title="Attach File"
            className="p-2 rounded hover:bg-violet-200 transition duration-150"
          >
            <i className="ri-attachment-line text-xl"></i>
          </button>

          
          <div className="ml-auto">
            <button
              onClick={() => setShowEmojiPicker(prev => !prev)}
              title="Emoji"
              className="p-2 rounded hover:bg-violet-200 transition duration-150"
            >
              <i className="ri-emoji-sticker-fill text-xl"></i>
            </button>
          </div>
        </div>

        
        <div className="flex justify-between items-center pt-4 border-t">
          <div></div>
          <div className="space-x-2">
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-900 hover:scale-105 transition">Cancel</button>
            <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-900 hover:scale-105 transition">Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
