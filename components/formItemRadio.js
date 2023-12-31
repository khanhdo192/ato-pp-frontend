export default function FormItemRadio({
  id,
  name,
  value,
  label,
  xtra,
  isDisabled,
  isChequed,
  onChange,
}) {
  return (
    <div
      className={
        'flex items-center relative px-1 lg:px-2 mb-1.5 ' +
        (isDisabled ? 'opacity-40' : 'cursor-pointer') +
        ' ' +
        xtra
      }
    >
      <input
        className="formItemRadio w-3 h-3 rounded-full cursor-pointer"
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={isChequed}
        disabled={isDisabled}
        onChange={onChange}
      />

      <label
        htmlFor={id}
        className="block text-sm tracking-wide pl-2 truncate cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}
