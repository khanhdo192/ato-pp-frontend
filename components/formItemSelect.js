import { IcoArwPull } from '../components/icons';

import FormAssetLabel from '../components/formAssetLabel';
import FormAssetErrorP from '../components/formAssetErrorP';
import FormAssetErrorIco from '../components/formAssetErrorIco';
<<<<<<< HEAD

export default function FormItemSelect({
=======
import { update } from 'lodash';

export default function FormItemInput({
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  id,
  placeholder,
  value,
  isDisabled,
  label,
  error,
  errorMsg,
  children,
  onChange,
<<<<<<< HEAD
=======
  updateDate,
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
}) {
  return (
    <div
      className={
        'relative w-full px-1 lg:px-2 mb-8 ' + (error ? 'form-error' : '')
      }
    >
      <FormAssetLabel id={id} label={label} />
      <IcoArwPull className="absolute top-9.5 right-5 w-3 h-3 fill-current" />
      <select
<<<<<<< HEAD
=======
        onChange={onChange ? e => onChange(e) : null}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        id={id}
        className="form-input w-full px-3 lg:px-4 cursor-pointer bg-transparent truncate pr-10 focus:border-b-310"
        type="text"
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
<<<<<<< HEAD
        onChange={onChange}
      >
        {children}
      </select>
      <FormAssetErrorP errorMsg={errorMsg} />
=======
      >
        {children}
      </select>
      {!!updateDate && !errorMsg ? (
        <p className="absolute right-2 text-xs text-right mt-0.5 mr-1 text-blue-400">
          {updateDate}
        </p>
      ) : !!errorMsg ? (
        <FormAssetErrorP errorMsg={errorMsg} />
      ) : null}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      {error && <FormAssetErrorIco />}
    </div>
  );
}
