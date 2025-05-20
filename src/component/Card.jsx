

const Card = () => {
  return (
          <div className="bg-white p-4 rounded-xl shadow-md max-w-md mx-auto">
        <div className="flex items-center justify-between">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
          />

          <div className="flex flex-col flex-1 px-3">
            <h1 className="text-sm font-semibold text-gray-800">John Doe</h1>
            <p className="text-xs text-gray-500 flex items-center">
              <i className="ri-map-pin-line mr-1 text-sm"></i>
              Bhopal
            </p>
          </div>
          <button className="border border-blue-500 text-violet-500 text-sm px-4 py-1 rounded-full hover:bg-blue-50 transition-all">
            Follower
          </button>
        </div>     
      </div>
  )
}

export default Card