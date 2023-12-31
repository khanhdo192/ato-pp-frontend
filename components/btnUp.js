import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { IcoArwPull } from '@/components/icons';
=======
import { IcoArwPull } from '../components/icons';
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710

export default function BtnUp({}) {
  let [opacity, setOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', btUpScroll);

    function btUpScroll() {
      window.scrollY >= 100 ? setOpacity(1) : setOpacity(0);
    }

    return () => {
<<<<<<< HEAD
      removeEventListener('scroll', btUpScroll);
=======
      window.removeEventListener('scroll', btUpScroll);
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    };
  }, []);

  const scrollUp = () => {
<<<<<<< HEAD
    window.scrollTo(0, 0);
=======
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  };

  return (
    <button
      onClick={scrollUp}
<<<<<<< HEAD
      className={
        (opacity ? 'fixed' : 'hidden') +
        ' flex items-center justify-center w-12 h-12 bg-white opacity-60 shadow-md rounded-full bottom-4 right-4 cursor-pointer'
      }
=======
      className={`${
        opacity ? 'fixed' : 'hidden'
      } flex items-center justify-center w-12 h-12 bg-white opacity-60 shadow-md rounded-full bottom-4 right-4 cursor-pointer`}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    >
      <IcoArwPull className="w-4 h-4 text-b-600 fill-current transform rotate-180" />
    </button>
  );
}
