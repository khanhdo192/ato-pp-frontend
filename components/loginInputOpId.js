export default function LoginInputOpId({
  id,
  type,
  placeholder,
  value,
  ico,
  isDisabled,
  onChange,
  isRequired,
  xtra,
}) {
  return (
    <div className="bf-red-300 relative my-2.5 w-full">
      <input
        id={id}
        className="relative w-full border border-gr-300 rounded-l-lg w py-2 px-3 text-gray-600  focus:shadow-outline bg-gr-750"
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        onChange={e => onChange(e.target.value)}
        required={isRequired}
      />
    </div>
  );
}
