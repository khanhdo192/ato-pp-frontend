export default function BtnColor({ onClick, xtra, color, text }) {
    return (
        <button
            className={
                !!color ? 
                    `relative flex items-center justify-center no-sel text-sm font-bold tracking-wider uppercase leading-none border-p-500 rounded-lg text-white p-3.5 transition-transform transform lg:hover:scale-103 ${color}` 
                : 
                    'relative flex items-center justify-center no-sel text-sm font-bold tracking-wider uppercase leading-none border-p-500 rounded-lg text-white p-3.5 transition-transform transform lg:hover:scale-103 bg-p-500'
                + xtra
            }
            onClick={onClick ? onClick : null}
        >
            { text }
        </button>
    );
}
