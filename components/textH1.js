

export default function TextH1({ color = 'text-gr-600', font = 'font-medium', fontSize = 'text-lg', margin = 'mb-4', text, highliteText, xtra }) {

  return (
    <h1 className={`${color} ${margin} ${fontSize} tracking-wide ${font} ${xtra}`}>
      {text}<span className="text-b-500 font-semibold"> {highliteText}</span>
    </h1>
  )
}
