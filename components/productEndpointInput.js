import { IcoCheck } from '@/components/icons';
import Spinner from '@/components/spinner';

export default function ProductEndpointInput({
  id,
  type,
  placeholder,
  value,
  onChange,
  isDisabled,
  buttonIsDisabled,
  onClick,
  error,
  errorMsg,
  success,
  successMsg,
}) {
  const classNameFeedbackMsg =
    'absolute left-2 text-btn-action font-medium tracking-wide pt-1 ';
  return (
    <div
      className={
        'relative w-full px-1 lg:px-2 ' +
        (isDisabled ? 'opacity-40 ' : 'cursor-pointer ') +
        (error ? 'form-error' : '') +
        (success ? 'form-success' : '')
      }
    >
      <input
        id={id}
        className="form-input w-full px-3 lg:px-4 focus:border-b-310"
        type={'text'}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        onChange={onChange}
      />

      <p className={classNameFeedbackMsg + 'text-r-400'}>{error && errorMsg}</p>
      <p className={classNameFeedbackMsg + 'text-g-400'}>
        {success && !error && successMsg}
      </p>

      <div
        className={
          `flex absolute top-0 right-0 items-center justify-center w-11 h-full ${
            error && errorMsg ? 'bg-red-500' : 'bg-b-500'
          } rounded-r-md ` + (buttonIsDisabled ? ' ' : 'cursor-pointer ')
        }
      >
        <button
          className="border-none"
          onClick={!buttonIsDisabled ? onClick : null}
        >
          {type == 'spinner' ? (
            <Spinner isLoading size={6} color="text-white bg-b-500" />
          ) : (
            <IcoCheck className="w-8 h-8 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}
