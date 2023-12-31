import React from 'react';
import ModalMain from '@/components/modalMain';
import ModalContainer from '@/components/modalContainer';
import BtnPopClose from '@/components/btnPopClose';
<<<<<<< HEAD
import Spinner from './spinner';
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710

export default function ModalConfimationTestReport({
  isOpenModal,
  closeModal,
  submitReport,
<<<<<<< HEAD
  fetching,
}) {
  return (
    <ModalMain isOpen={isOpenModal}>
      <ModalContainer w="w-full md:w-8/12 lg:w-5/12">
        <BtnPopClose onClick={closeModal} disabled={fetching} />
        <div className="flex flex-col mt-4">
          <p className="flex justify-center font-bold text-2xl pb-5">
            Submission Confirmation
          </p>
          <div className="m-auto font-medium px-6 pb-9">
            <p>
              By submitting your test result you confirm all test records are
              open for JCB review and all information provided is correct as
              intended.
            </p>
          </div>
          <div className="flex justify-around">
            <button
              onClick={submitReport}
              disabled={fetching}
              className="bg-blue-600 py-2 px-6 text-white rounded-xl"
            >
              <p className="flex">
                {fetching ? <Spinner isLoading={fetching} /> : null}
                <p className={`${fetching ? 'ml-3' : ''}`}>I Confirm</p>
              </p>
            </button>
            <button
              onClick={closeModal}
              disabled={fetching}
              className="bg-gray-400 py-2 px-6 text-white rounded-xl"
            >
              Cancel
            </button>
=======
}) {
  return (
    <ModalMain isOpen={isOpenModal}>
      <ModalContainer w="w-3/12" h="h-2/6">
        <BtnPopClose onClick={closeModal} />
        <div>
          <div className="flex flex-col">
            <p className="flex justify-center font-bold text-2xl pb-5">
              Submission Confirmation
            </p>
            <div className="m-auto font-medium px-6 pb-9">
              <p>
                By submitting your test result you confirm all test records are
                open for JCB review and all information provided is correct as
                intended.
              </p>
            </div>
            <div className="flex justify-around">
              <button
                onClick={submitReport}
                className="bg-blue-600 py-2 px-6 text-white rounded-xl"
              >
                I confirm
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-400 py-2 px-6 text-white rounded-xl"
              >
                Cancel
              </button>
            </div>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
          </div>
        </div>
      </ModalContainer>
    </ModalMain>
  );
}
