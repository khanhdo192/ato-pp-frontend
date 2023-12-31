import { IcoSearch } from '../components/icons';

export default function InputSearch({
  id,
  name,
  placeholder,
  value,
  xtra,
  onChange,
  disable,
<<<<<<< HEAD
  placeholderStyles = 'placeholder-b-300',
}) {
  return (
    <div className={'relative text-b-600 ' + xtra}>
      <IcoSearch className="absolute top-2 left-2 w-4.5 h-4.5 fill-current" />
      <input
        className={`w-full relative input no-sel bg-transparent cursor-pointer pl-9 pr-2focus:border-b-300 leading-none ${placeholderStyles}`}
=======
  nonIcon,
}) {
  return (
    <div className={'relative text-b-600 ' + xtra}>
      {!nonIcon && (
        <IcoSearch className="absolute top-2 left-2 w-4.5 h-4.5 fill-current" />
      )}
      <input
        className={`w-full relative input no-sel bg-transparent cursor-pointer  ${
          !nonIcon ? 'pl-9' : 'pl-2'
        } pr-2 placeholder-b-300 focus:border-b-300 leading-none`}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
<<<<<<< HEAD
        onChange={onChange}
=======
        onChange={onChange ? onChange : null}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        disabled={disable}
      />
    </div>
  );
}
