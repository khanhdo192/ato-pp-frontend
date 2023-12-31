import { IcoError } from '../components/icons';

export default function FormErrorIco({ xtra }) {
  return (
    <div
      className={
        xtra +
        ' flex absolute -right-1.5 lg:-right-0.5 top-2 items-center justify-center w-6 h-6 bg-white rounded-full shadow-icon'
      }
    >
      <IcoError className="w-5 h-5 text-r-400 fill-current" />
    </div>
  );
}
