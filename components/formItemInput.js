import React from 'react';
<<<<<<< HEAD
import { IcoEdit, IcoView, IcoViewNone } from '../components/icons';
import Spinner from '@/components/spinner';
import FormAssetLabel from '../components/formAssetLabel';
import FormAssetErrorP from '../components/formAssetErrorP';
import FormAssetSuccessP from '../components/formAssetSuccessP';
import FormAssetErrorIco from '../components/formAssetErrorIco';
import FormAssetSuccessIco from '../components/formAssetSuccessIco';

=======
import { IcoView, IcoViewNone } from '../components/icons';

import FormAssetLabel from '../components/formAssetLabel';
import FormAssetErrorP from '../components/formAssetErrorP';
import FormAssetErrorIco from '../components/formAssetErrorIco';

>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
export default function FormItemInput({
  id,
  type,
  placeholder,
  value,
  isDisabled,
<<<<<<< HEAD
  buttonIsDisabled,
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  isRequired,
  label,
  info,
  error,
  errorMsg,
  onChange,
  defaultValue,
<<<<<<< HEAD
  maxlength,
  success,
  successMsg,
  onClick,
  autoComplete,
=======
  max = null,
  styles = null,
  pad = 'px-3 lg:px-4',
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
}) {
  const [viewPass, setViewPass] = React.useState(false);

  const toggleView = () => setViewPass(!viewPass);

  return (
    <div
      className={
<<<<<<< HEAD
        'relative w-full px-1 lg:px-2 mb-8 ' +
        (isDisabled ? 'opacity-40 ' : 'cursor-pointer ') +
        (error ? 'form-error' : '') +
        (success ? 'form-success' : '')
=======
        'relative w-full px-1 lg:px-2 mb-8 ' + (error ? 'form-error' : '')
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      }
    >
      <FormAssetLabel id={id} label={label} />
      <input
        id={id}
<<<<<<< HEAD
        className="form-input w-full px-3 lg:px-4 focus:border-b-310"
=======
        className={`form-input w-full focus:border-b-310 ${pad} ${styles}`}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        type={type == 'password' && viewPass ? 'text' : type}
        placeholder={placeholder}
        value={value}
        required={isRequired}
        disabled={isDisabled}
        onChange={onChange}
        defaultValue={defaultValue}
<<<<<<< HEAD
        maxLength={maxlength}
        autoComplete={autoComplete}
      />
      <FormAssetErrorP errorMsg={errorMsg} />
      <FormAssetSuccessP successMsg={!errorMsg && successMsg} />
      <p className="absolute right-2 text-b-300 text-btn-action tracking-wider pt-0.5">
        {info}
      </p>

      {error && <FormAssetErrorIco />}
      {!errorMsg && success && <FormAssetSuccessIco />}

      <div
        className={
          (type == 'password' ? 'flex' : 'hidden') +
          ' absolute top-8 right-4 items-center justify-center w-6 h-6 bg-white rounded-full shadow-icon'
        }
      >
        {viewPass && (
          <a className="cursor-pointer" onClick={toggleView}>
            <IcoView className="w-5 h-5 text-p-500 fill-current" />
          </a>
        )}
        {!viewPass && (
          <a className="cursor-pointer" onClick={toggleView}>
            <IcoViewNone className="w-5 h-5 text-gr-500 fill-current" />
          </a>
        )}
      </div>

      <div
        className={
          (type == 'edit' ? 'flex' : 'hidden') +
          ' absolute top-8 right-4 items-center justify-center w-6 h-6 bg-white rounded-full shadow-icon ' +
          (buttonIsDisabled ? 'opacity-40 ' : 'cursor-pointer ')
        }
      >
        <a onClick={!buttonIsDisabled ? onClick : null}>
          <IcoEdit className="w-5 h-5 text-p-500 fill-current" />
        </a>
      </div>

      <div
        className={
          (type == 'spinner' ? 'flex' : 'hidden') +
          ' absolute top-8 right-4 items-center justify-center w-6 h-6 bg-white rounded-full shadow-icon'
        }
      >
        <a onClick={!buttonIsDisabled ? onClick : null}>
          <Spinner isLoading size={5} />
        </a>
=======
        maxLength={max}
      />
      <FormAssetErrorP errorMsg={errorMsg} />
      <p className="absolute right-2 text-b-300 text-btn-action tracking-wider pt-0.5">
        {info}
      </p>
      {error && <FormAssetErrorIco />}

      <div
        className={
          (type == 'password' ? 'flex' : 'hidden') +
          ' absolute top-8 right-4 items-center justify-center w-6 h-6 bg-white rounded-full shadow-icon'
        }
      >
        {viewPass && (
          <a className="cursor-pointer" onClick={toggleView}>
            <IcoView className="w-5 h-5 text-p-500 fill-current" />
          </a>
        )}
        {!viewPass && (
          <a className="cursor-pointer" onClick={toggleView}>
            <IcoViewNone className="w-5 h-5 text-gr-500 fill-current" />
          </a>
        )}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      </div>
    </div>
  );
}
FormItemInput.defaultProps = {
  type: 'text',
};
