import Link from 'next/link';

<<<<<<< HEAD
export default function BreadcrumbItem({ isFirst, label, link }) {
  return (
    <div className="flex items-center cursor-pointer">
      <div
        className={
          (isFirst ? 'hidden ' : '') +
          'w-1 h-1 bg-b-600 rounded-full mx-2 -mt-0.5'
        }
      ></div>
      {link ? <Link href={link ? link : ''}>{label}</Link> : <p>{label}</p>}
=======
export default function BreadcrumbItem({
  isFirst,
  label,
  link,
  color = 'text-b-800',
  fontSize = 'text-2xl',
}) {
  return (
    <div className={`flex items-center cursor-pointer ${fontSize}`}>
      <div
        className={
          (isFirst ? 'hidden ' : '') +
          'w-1 h-1 bg-gr-400 rounded-full mx-2 -mt-0.5 '
        }
      ></div>
      {link ? (
        <Link href={link ? link : ''}>{label}</Link>
      ) : (
        <p className={`${color} font-medium`}>{label}</p>
      )}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    </div>
  );
}
