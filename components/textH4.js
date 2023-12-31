export default function TextH4({ text, style, fontColor = 'text-b-600' }) {
  return (
    <div className={`font-medium mb-6 ${style} ${fontColor}`}>
      <h4>{text}</h4>
    </div>
  );
}
