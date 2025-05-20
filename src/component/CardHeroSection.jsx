

const CardHeroSection = () => {
  return (
    <div className="card h-100 w-[30%]  rounded-xl overflow-hidden shadow-sm">
          <img
            src="news.webp "
            alt=""
            className="h-[45%] w-full object-cover object-center"
          />
          <h2 className="text-3xl font-bold p-2">
            Lorem lorem ipsum dolor sit.
          </h2>
          <p className="text-sm font-medium px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            eos!
          </p>
          <div className="w-full h-15  mt-2 flex  gap-2 items-center justify-between px-3">
            <div className="h-full flex  gap-2 items-center px-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
                className="h-[70%] aspect-square object-cover rounded-full"
              />
              <p className="text-lg font-medium">name hai </p>
            </div>

            <button className="text-sm font-medium bg-blue-300 px-3 py-2 rounded">Follow</button>
          </div>
        </div>
  )
}

export default CardHeroSection