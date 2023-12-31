export default function UserMenuItem({ label, children, onClick }) {
  return (
<<<<<<< HEAD
    <div
      onClick={onClick}
      className="group flex items-center py-1 cursor-pointer"
    >
=======
    <div onClick={!!onClick ? () => onClick() : null} className="group flex items-center py-1 cursor-pointer">
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      {children}
      <p className="mt-1.5 group-hover:text-blue-600 transition duration-300">
        {label}
      </p>
    </div>
  );
}
