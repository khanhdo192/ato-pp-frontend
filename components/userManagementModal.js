import ModalMain from '@/components/modalMain';
import ModalContainer from '@/components/modalContainer';
import BtnPopClose from './btnPopClose';

export default function UserManagementModal({
  isOpen,
  closeModal,
  deleteUser,
}) {
  return (
    <ModalMain isOpen={isOpen} zIndex="50">
      <ModalContainer w="w-3/12">
        <BtnPopClose onClick={closeModal} />
        <h1 className="text-center font-semibold text-2xl mb-8">
          Delete Confirmation
        </h1>
        <div>
          <div className="mx-3 font-medium mb-12">
            This user account will be deleted permanantely and cannot be undone.
            Please confirm you wish to complete this action by clicking on "I
            Confirm".
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="mx-3 rounded-lg">
            <button
              className="bg-gray-400 py-1 px-10 rounded-lg text-white font-medium"
              onClick={closeModal}
            >
              CLOSE
            </button>
          </div>
          <div className="mx-3 rounded-lg">
            <button
              className="bg-blue-500 py-1 px-10 rounded-lg text-white font-medium"
              onClick={deleteUser}
            >
              I Confirm
            </button>
          </div>
        </div>
      </ModalContainer>
    </ModalMain>
  );
}
