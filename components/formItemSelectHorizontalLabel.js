import { IcoArwPull } from '../components/icons';
import FormAssetErrorP from '../components/formAssetErrorP';

function FormLabel({ id, label }) {
  return (
    <label
      htmlFor={id}
      className={
        (label ? 'block' : 'hidden') +
        ' text-base relative text-gr-600 tracking-wide pb-1.5'
      }
    >
      {label}
    </label>
  );
}

export default function FormItemSelectHorizontalLabel({
  id,
  placeholder,
  value,
  isDisabled,
  label,
  info,
  error,
  errorMsg,
  children,
  onChange,
  longCol = false,
  className,
}) {
  return (
    <div
      className={
        'w-full grid md:grid-cols-30-70 gap-0 ' +
        (info ? 'mb-1.5 ' : 'mb-3 ') +
        `lg:grid-cols-${longCol ? 'long' : 'short'}-horizontal-label ` +
        (error ? 'form-error' : '') +
        `${className ? className : ''}`
      }
    >
      <div className="flex items-center">
        <FormLabel id={id} label={label} />
      </div>
      <div className="relative w-full">
        <IcoArwPull className="absolute top-5 right-3 w-3 h-3 fill-current" />
        <select
          id={id}
          className={`form-input-v2 w-full px-3 lg:px-4 cursor-pointer truncate pr-10 focus:border-b-310 ${
            error && errorMsg ? 'border-red-500' : ''
          }`}
          type="text"
          placeholder={placeholder}
          value={value}
          disabled={isDisabled}
          onChange={onChange}
        >
          {children}
        </select>
        <p className="text-gray-400 ml-5 text-btn-action tracking-wider pt-0.5">
          {info}
        </p>
        {error && errorMsg && (
          <FormAssetErrorP errorMsg={errorMsg} xtra="right-0 bottom-0 pt-0.5" />
        )}
      </div>
    </div>
  );
}
