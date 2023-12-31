import { IcoArwSort } from '@/components/icons';

const THeadButton = ({
  active,
  label,
  justify,
  noOrder,
  onClick,
  labelStyle = 'text-gr-600',
  buttonStyles,
}) => {
  return (
    <th className="bg-blue-900 text-white border-r border-white px-4 py-2">
      <div
        className={`flex ${buttonStyles ? buttonStyles : ''} ${
          justify === 'right' ? 'justify-end' : ''
        } ${justify === 'center' ? 'justify-center' : ''}`}
      >
        <button onClick={onClick} className={`flex gap-1 items-center`}>
          <p className={`text-xs font-medium break-words ${labelStyle}`}>
            {label}
          </p>
          {!noOrder && (
            <IcoArwSort
              className={
                'fill-current w-2 h-2 mt-px transform ' +
                (active ? 'text-blue-400' : 'rotate-180 text-gr-300')
              }
            />
          )}
        </button>
      </div>
    </th>
  );
};

export { THeadButton };
