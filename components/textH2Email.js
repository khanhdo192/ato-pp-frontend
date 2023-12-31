export default function TextH2Email ({color, text, xtra, redicting}) {
  return (
    <h1 className={xtra} style={redicting ? { color: '#329fff'} : {}}>{text}</h1>
  )
}