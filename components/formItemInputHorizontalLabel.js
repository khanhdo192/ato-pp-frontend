import React from 'react';
import {
  IcoError,
  IcoPhone,
  IcoBox,
  IcoCompany,
  IcoId,
  IcoMailV2,
  IcoMobile,
  IcoPassHide,
  IcoPassUnhide,
  IcoPerson,
  IcoCalendar,
  IcoLocation,
} from '@/components/icons';

import FormAssetErrorP from '@/components/formAssetErrorP';

function FormLabel({ id, label }) {
  return (
    <label
      htmlFor={id}
      className={
        (label ? 'block' : 'hidden') +
        ' text-base relative text-gr-700 tracking-wide pb-1.5'
      }
    >
      {label}
    </label>
  );
}

export default function FormItemInputHorizontalLabel({
  id,
  type,
  placeholder,
  value,
  isChecked,
  isDisabled,
  isRequired,
  label,
  ico,
  info,
  onChange,
  maxLength,
  minLength,
  error,
  errorMsg,
  defaultValue,
  longCol = false,
}) {
  const classIco = 'w-20 h-20 fill-r-400 ';

  return (
    <div
      className={
        'w-full grid md:grid-cols-30-70 gap-0 ' +
        (info ? 'mb-1.5 ' : 'mb-4 ') +
        `lg:grid-cols-${longCol ? 'long' : 'short'}-horizontal-label ` +
        (isDisabled ? 'opacity-40 ' : 'cursor-pointer ') +
        (error ? 'form-error' : '')
      }
    >
      <div className={'flex items-center ' + (info ? 'pb-3' : '')}>
        <FormLabel id={id} label={label} />
      </div>
      <div className="relative w-full">
        <input
          id={id}
          className={
            type == 'checkbox'
              ? 'no-sel-input w-5 h-5 rounded-md cursor-pointer'
              : 'form-input-v2 w-full px-3 lg:px-4 focus:border-b-310'
          }
          type={type}
          placeholder={placeholder}
          value={value}
          checked={isChecked}
          required={isRequired}
          disabled={isDisabled}
          onChange={onChange}
          defaultValue={defaultValue}
          maxLength={maxLength}
          minLength={minLength}
        />
        <p className="text-gray-400 ml-5 mt-0.5 text-btn-action tracking-wider pt-0.5">
          {info}
        </p>
        {error && errorMsg ? (
          <FormAssetErrorP
            errorMsg={errorMsg}
            xtra={`right-0 ${info ? 'bottom-0' : '-bottom-4'} mt-0.5 pt-0.5`}
          />
        ) : !!maxLength ? (
          <p
            className={`text-gray-400 ml-5 mt-0.5 text-btn-action pt-0.5 absolute ${
              info ? 'bottom-0' : '-bottom-4'
            } right-0 mt-0.5 pt-0.5`}
          >
            maximum {value.length}/{maxLength} character
          </p>
        ) : null}
        <div
          className={
            (ico ? 'flex' : 'hidden') +
            ' absolute top-1 right-2 items-center justify-center w-9 h-9 bg-white rounded-full' //opacity-60
          }
        >
          {
            {
              phone: <IcoPhone className={classIco} />,
              box: <IcoBox className={classIco} />,
              company: <IcoCompany className={classIco} />,
              calendar: <IcoCalendar className={classIco} />,
              id: <IcoId className={classIco} />,
              mailV2: <IcoMailV2 className={classIco} />,
              mobile: <IcoMobile className={classIco} />,
              passHide: <IcoPassHide className={classIco} />,
              passUnhide: <IcoPassUnhide className={classIco} />,
              person: <IcoPerson className={classIco} />,
              location: <IcoLocation className={classIco} />,
            }[ico]
          }
        </div>
      </div>
    </div>
  );
}
FormItemInputHorizontalLabel.defaultProps = {
  type: 'text',
};
