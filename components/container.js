export default function Container({ children, hasBorder, xtra, styles }) {
  return (
    <div
      style={styles}
<<<<<<< HEAD
      className={`${xtra ?? xtra} ${
        hasBorder ? 'border border-b-250' : 'mb-3 lg:mb-4'
      } px-3 py-4 lg:p-6 lg:pt-7 bg-white rounded-xl
      `}
=======
      className={
        (hasBorder ? 'border border-b-250' : 'mb-3 lg:mb-4') +
        ` px-3 py-4 lg:p-6 lg:pt-7 bg-white rounded-xl ${xtra ? xtra : ''}`
      }
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    >
      {children}
    </div>
  );
}
