import FormAssetLabel from '../components/formAssetLabel';
import FormAssetErrorP from '../components/formAssetErrorP';
import FormAssetErrorIco from '../components/formAssetErrorIco';

export default function FormItemTextarea({
  rows,
  maxlength,
  id,
  placeholder,
  value,
  isDisabled,
<<<<<<< HEAD
=======
  onChange,
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  label,
  info,
  error,
  errorMsg,
<<<<<<< HEAD
  onChange,
  xtra,
  ref,
}) {
  return (
    <div
      className={
        'relative w-full px-1 lg:px-2 mb-8 ' +
        (error ? 'form-error ' : '') +
        xtra
=======
}) {
  const onChangeHandler = () => {};
  return (
    <div
      className={
        'relative w-full px-1 lg:px-2 mb-8 ' + (error ? 'form-error' : '')
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      }
    >
      <FormAssetLabel id={id} label={label} />
      <textarea
        className="form-input w-full px-3 lg:px-4 focus:border-b-310 leading-7 resize-none"
        rows={rows}
        maxLength={maxlength}
        id={id}
        placeholder={placeholder}
<<<<<<< HEAD
        disabled={isDisabled}
        onChange={onChange}
        value={value}
        ref={ref}
=======
        value={value}
        disabled={isDisabled}
        onChange={!!onChange ? onChange : onChangeHandler}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      ></textarea>
      <FormAssetErrorP errorMsg={errorMsg} />
      <p className="absolute right-2 text-b-300 text-btn-action tracking-wider pt-0.5">
        {info}
      </p>
      {error && <FormAssetErrorIco />}
    </div>
  );
}
