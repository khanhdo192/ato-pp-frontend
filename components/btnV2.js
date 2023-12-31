import Spinner from '@/components/spinner';

import {
  IcoView,
  IcoEdit,
  IcoReview,
  IcoSubmit,
  IcoSubmitted,
  IcoTest,
  IcoAddUser,
  IcoUserManage,
  IcoDownload,
  IcoSave,
} from '../components/icons';

export default function BtnV2({
  ico,
  label,
  textColor = 'text-white',
  bgColor = 'bg-b-950',
  borderColor = 'border-p-500',
  xtra,
  isDisable,
  onClick,
  onKeyPress,
}) {
  let classIco = 'w-4 h-4 z-1 fill-current text-white';
  //bg-b-950
  return (
    <button
      className={
        'relative flex items-center justify-center no-sel text-base capitalize font-bold tracking-wider leading-none border rounded-xl transition-transform transform lg:hover:scale-103 ' +
        (ico ? 'pt-3 pb-2.5 pl-5.5 pr-7 ' : 'pt-3 pb-3 px-8 ') +
        textColor +
        ' ' +
        bgColor +
        ' ' +
        borderColor +
        ' ' +
        xtra +
        (isDisable ? ' opacity-40 cursor-default transform-none ' : ' ')
      }
      onClick={onClick ? onClick : null}
      onKeyPress={onKeyPress ? onKeyPress : null}
      disabled={isDisable}
    >
      <div
        className={
          (ico ? 'flex mr-3' : 'hidden') +
          ' items-center justify-center w-6 h-6 min-w-6 rounded-full ' +
          bgColor
        }
      >
        {
          {
            edit: <IcoEdit className={classIco} />,
            review: <IcoReview className={classIco} />,
            submit: <IcoSubmit className={classIco} />,
            submitted: <IcoSubmitted className={classIco} />,
            test: <IcoTest className={classIco} />,
            view: <IcoView className={classIco} />,
            'add-user': <IcoAddUser className={classIco} />,
            'user-manage': <IcoUserManage className={classIco} />,
            download: <IcoDownload className={classIco} />,
            save: <IcoSave className={classIco} />,
            spinner: <Spinner isLoading color={textColor + ' ' + bgColor} />,
          }[ico]
        }
      </div>
      <p className="pt-0.5">{label}</p>
    </button>
  );
}
