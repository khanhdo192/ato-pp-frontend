<<<<<<< HEAD
import ModalMain from '@/components/modalMain'
import ModalPopupMd from '@/components/modalPopupMd'
import Btn from '@/components/btn'

export default function ModalMedium({ title, text, onClick, isOpen, closeModal, labelOnClick = "Submit", labelCloseModal = "Cancel" }) {

  return (
    <ModalMain isOpen={isOpen}>

      <ModalPopupMd title={title} text={text}>

          {/*  CONTENT  */}

          <div className="grid grid-cols-2 gap-3">
            <Btn label={labelCloseModal} xtra="w-full" secondary onClick={closeModal} />
            <Btn label={labelOnClick} xtra="w-full" onClick={onClick} />
          </div>

      </ModalPopupMd>

    </ModalMain>
  )
=======
import ModalMain from '../components/modalMain';
import ModalPopupMd from '../components/modalPopupMd';
import Btn from '../components/btn';

export default function ModalMedium({
  isOpen,
  title,
  text,
  onSubmit,
  onCancel,
}) {
  return (
    <ModalMain isOpen={isOpen}>
      <ModalPopupMd
        title={title ? title : 'Modal Medium Title'}
        text={
          text ? text : 'Subtitle reference text for madal medium popup window'
        }
      >
        {/*  CONTENT  */}

        <div className="grid grid-cols-2 gap-3">
          <Btn
            onClick={onCancel ? onCancel : null}
            label="Cancel"
            xtra="w-full"
            secondary
          />
          <Btn
            onClick={onSubmit ? onSubmit : null}
            label="Submit"
            xtra="w-full"
          />
        </div>
      </ModalPopupMd>
    </ModalMain>
  );
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
}
