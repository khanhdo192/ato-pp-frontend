export default function LoginInputV2({
  id,
  type,
  placeholder,
  value,
  ico,
  isDisabled,
  onChange,
  isRequired,
  xtra,
  autoComplete,
}) {
  return (
    <div className={`bf-red-300 relative my-2.5 ${xtra}`}>
      <input
        id={id}
<<<<<<< HEAD
        className="relative w-full border border-gr-300 rounded-lg py-2 px-3 text-gray-600  focus:shadow-outline bg-gr-750"
=======
        className="relative w-full border border-gr-300 rounded-lg py-2 px-3 text-gray-600 focus:outline-none focus:shadow-outline bg-gr-750"
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        onChange={e => onChange(e.target.value)}
        required={isRequired}
        autoComplete={autoComplete}
      />
    </div>
  );
}
