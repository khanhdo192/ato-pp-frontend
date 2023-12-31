import ReactPaginate from 'react-paginate';
import BtnPage from '@/components/btnPage';

export default function TablePaginate({
  previousLabel,
  nextLabel,
  breakClassName,
  activeClassName,
  containerClassName,
  pageClassName,
  initialPage,
  pageCount,
  marginPagesDisplayed,
  pageRangeDisplayed,
  onPageChange,
  activeLinkClassName,
  pageLinkClassName,
}) {
  return (
    <ReactPaginate
      previousLabel={previousLabel ? previousLabel : <BtnPage label="left" />}
      nextLabel={nextLabel ? nextLabel : <BtnPage label="right" />}
      breakClassName={
        breakClassName
          ? breakClassName
          : 'cursor-pointer w-8 h-8 min-w-8 flex items-center justify-center leading-none text-sm text-b-600 font-medium rounded-full'
      }
      activeClassName={
        activeClassName ? activeClassName : 'border border-b-600 cursor-default'
      }
      containerClassName={
<<<<<<< HEAD
        containerClassName ? containerClassName : 'flex justify-end space-x-2'
=======
        containerClassName
          ? containerClassName
          : 'flex justify-center lg:justify-end space-x-2'
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      }
      pageClassName={
        pageClassName
          ? pageClassName
          : 'cursor-pointer w-8 h-8 min-w-8 flex items-center justify-center leading-none text-sm text-b-600 font-medium rounded-full'
      }
      initialPage={initialPage ? initialPage : 0}
      pageCount={pageCount ? pageCount : 1}
      marginPagesDisplayed={marginPagesDisplayed ? marginPagesDisplayed : 1}
<<<<<<< HEAD
      pageRangeDisplayed={pageRangeDisplayed ? pageRangeDisplayed : 5}
=======
      pageRangeDisplayed={pageRangeDisplayed ? pageRangeDisplayed : 2}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      onPageChange={onPageChange ? onPageChange : null}
      activeLinkClassName={
        activeLinkClassName ? activeLinkClassName : 'outline-none'
      }
      pageLinkClassName={pageLinkClassName ? pageLinkClassName : 'outline-none'}
    />
  );
}
