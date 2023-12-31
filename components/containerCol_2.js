<<<<<<< HEAD
export default function ContainerCol_2({ children, xtra }) {
  return (
    <div className={xtra + ' lg:grid lg:grid-cols-2 gap-x-3 lg:gap-x-4 '}>
      {children}
    </div>
  );
}
=======


export default function ContainerCol_2({children,xtra}) {

  return (
    <div className={"lg:grid lg:grid-cols-2 gap-x-3 lg:gap-x-4 " + xtra}>
      {children}
    </div>
  )
}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
