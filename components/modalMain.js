export default function ModalMain({
  children,
  isOpen,
  zIndex = '10',
<<<<<<< HEAD
  h = 'h-screen',
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  className,
}) {
  return (
    <div
      className={`${
        isOpen ? 'fixed' : 'hidden'
<<<<<<< HEAD
      } modal-bg top-0 left-0 flex flex-col w-full items-center justify-center p-2 md:p-4 z-${zIndex} ${h} ${
=======
      } modal-bg top-0 left-0 flex flex-col w-full overflow-y-auto h-screen items-center justify-center p-2 md:p-4 z-${zIndex} ${
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
}
