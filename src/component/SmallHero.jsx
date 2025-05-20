
const SmallHero = (props) => {
  const { hight, category, heading, img } = props;
  console.log(hight);

  return (
    <div
      className={` w-full ${hight}  bg-[url(https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-cover  relative`}
    >
      <div className="w-full h-full bg-[#00000084] relative">
        <div
          className="absolute text-white p-5 font-[SUSE]
 flex flex-col gap-2 bottom-0"
        >
          <p className="text-sm font-light">{category}</p>

          <h1 className="text-4xl font-extrabold">{heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default SmallHero;
