const Card = ({ name, avatar }) => {
  const defaultAvatar =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <img
        src={avatar || defaultAvatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <span className="font-medium text-gray-800">{name}</span>
    </div>
  );
};

export default Card;
