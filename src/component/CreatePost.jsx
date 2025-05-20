import React from 'react'

const CreatePost = () => {
  return (
     <div className="w-full min-h-screen bg-violet-200 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 space-y-4 border border-gray-200">

        
        <div className="content flex items-center justify-center pb-2">
        
        <h1 className="Heading text-xl font-semibold text-gray-800 mx-2 text-center">Create Post</h1>

        
        </div>


        <div>
            <input className='w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-400 mb-4' type="text" placeholder='Heading'/>
          <textarea
            placeholder="Write Here"
            rows={9}
            className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        {/* Action Icons */}
            <div className="flex items-center text-gray-500">
        {/* Image Icon */}
        <button
            title="Add Image"
            className="p-2 rounded hover:bg-violet-200 transition duration-150"
        >
            <i className="ri-image-line text-xl"></i>
        </button>

        {/* Attachment Icon */}
        <button
            title="Attach File"
            className="p-2 rounded hover:bg-violet-200 transition duration-150"
        >
            <i className="ri-attachment-line text-xl"></i>
        </button>
       

        {/* Emoji Icon */}
        <div className="ml-auto">
            <button
            title="Emoji"
            className="p-2 rounded hover:bg-violet-200 transition duration-150"
            >
            <i className="ri-emoji-sticker-fill text-xl"></i>
            </button>
        </div>
        </div>



        {/* last Row */}
        <div className="flex justify-between items-center pt-4 border-t">
          {/* Post  */}
         <div></div>

          {/* Buttons */}
          <div className="space-x-2">
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-900">Cancel</button>
            <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-800 transition">
              Publish
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CreatePost