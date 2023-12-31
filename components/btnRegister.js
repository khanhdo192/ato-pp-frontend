export default function BtnRegister({ onClick, xtra }) {
  return (
    <button
      className={
        'relative flex items-center justify-center no-sel text-sm font-bold tracking-wider ' +
        'uppercase leading-none border-p-500 rounded-lg bg-g-470 text-white p-3.5 transition-transform transform lg:hover:scale-103 ' +
        xtra
      }
      onClick={onClick ? onClick : null}
    >
      REGISTER
    </button>
  );
}
