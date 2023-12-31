import { IcoArwPull } from '@/components/icons';
import UserMenuItem from '@/components/userMenuItem';
import Link from 'next/link';

const ActionButton = ({ product }) => {
  return (
    <div
      className={
        'absolute right-16 top-0 bg-white text-sm font-medium tracking-wide rounded-lg anim-fade border border-gray-400'
      }
      style={{ zIndex: '7' }}
    >
      <div className="flex justify-between border-b px-5 pb-1 border-gray-400">
        {product?.statusId >= 2 ? (
          <Link href={'/test-case/' + product?.productId}>
            <a>
              <UserMenuItem label="Test" />
            </a>
          </Link>
        ) : (
          <UserMenuItem label="Test" />
        )}
        <div className="flex items-center">
          <IcoArwPull
            className={'fill-current w-3 h-3 mt-px transform text-blue-800'}
          />
        </div>
      </div>
      <div className="px-6 pb-1">
        {product?.statusId >= '2' ? (
          <Link href={'/dashboard/configure/' + product?.productId}>
            <a>
              <UserMenuItem label="Configure" />
            </a>
          </Link>
        ) : (
          <UserMenuItem label="Configure" />
        )}
      </div>
    </div>
  );
};

export { ActionButton };
