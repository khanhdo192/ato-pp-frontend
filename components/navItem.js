import {
  IcoDash,
<<<<<<< HEAD
  IcoV2Dash,
=======
  IcoUserManage,
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  IcoCompanies,
  IcoSupport,
  IcoAddProduct,
  IcoSubscriptions,
<<<<<<< HEAD
  IcoSlaManagement,
  IcoClock,
  IcoDocumentation,
  IcoComplianceLetter,
  IcoUserManagement,
  IcoSettings,
} from './icons';
import Link from 'next/link';

export default function NavItem({ active, label, ico, href }) {
  let classIco = `${active ? 'text-b-300' : 'text-white'} w-7 h-7 fill-current`;
=======
  IcoClock,
  IcoOperators,
  IcoSettings,
  IcoUserManag,
  IcoV2Dash,
  IcoSelectArrow,
  IcoSlaManagement,
  IcoTest,
  IcoAccessAlerts,
  IcoComplianceLetter,
  IcoDocumentation,
  IcoSla,
  IcoTestCards,
} from '@/components/icons';
import Link from 'next/link';
import { useState } from 'react';

export default function NavItem({
  active,
  label,
  ico,
  href,
  onClick,
  isSubSection,
}) {
  const [upsideDown, setUpsideDown] = useState(false);

  let classIco = `${active ? 'text-b-300' : 'text-white'} w-7 h-7 fill-current`;
  let classArrow = '2xl:w-7 2xl:h-7 ring-current	stroke-current';
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710

  return (
    <Link href={!!href ? href : ''}>
      <div
<<<<<<< HEAD
        className={`flex items-center lg:px-4 py-3 stroke-current cursor-pointer ${
          active ? '2xl:border-l-4 border-b-300' : '2xl:pl-5'
        } ${!active ? 'hover:opacity-70' : ''}`}
=======
        onClick={onClick}
        className={`
          ${
            active && !isSubSection ? '2xl:border-l-4 border-b-300' : '2xl:pl-5'
          } flex items-center lg:px-4 py-3 stroke-current cursor-pointer ${
          !active ? 'hover:opacity-70' : ''
        }
        `}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      >
        {
          {
            dash: <IcoV2Dash className={classIco} />,
            'add-product': <IcoAddProduct className={classIco} />,
<<<<<<< HEAD
            'sla-manage': <IcoClock className={classIco} />,
            'user-manage': <IcoUserManagement className={classIco} />,
            support: <IcoSupport className={classIco} />,
            companies: <IcoCompanies className={classIco} />,
            subscriptions: <IcoSubscriptions className={classIco} />,
            sla: <IcoSlaManagement className={classIco} />,
            'ico-review': <IcoComplianceLetter className={classIco} />,
            documentation: <IcoDocumentation className={classIco} />,
            settings: <IcoSettings className={classIco} />,
          }[ico]
        }

=======
            'user-manage': <IcoUserManag className={classIco} />,
            test: <IcoTest className={classIco} />,
            'sla-management': <IcoSlaManagement className={classIco} />,
            support: <IcoSupport className={classIco} />,
            companies: <IcoCompanies className={classIco} />,
            subscriptions: <IcoSubscriptions className={classIco} />,
            operators: <IcoOperators className={classIco} />,
            settings: <IcoSettings className={classIco} />,
            'access-alerts': <IcoAccessAlerts className={classIco} />,
            'compliance-letter': <IcoComplianceLetter className={classIco} />,
            documentation: <IcoDocumentation className={classIco} />,
            sla: <IcoSla className={classIco} />,
            'test-cards': <IcoTestCards className={classIco} />,
          }[ico]
        }
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        {!!href ? (
          <Link href={href}>
            <a
              className={`${
                active ? 'text-b-300' : 'text-white'
              } menu-link lg:hidden 2xl:block pl-4`}
            >
              {label}
            </a>
          </Link>
        ) : (
          <div
            className={`${
              active ? 'text-b-300' : 'text-white'
<<<<<<< HEAD
            } menu-link lg:hidden 2xl:block pl-4`}
          >
            {label}
=======
            } menu-link lg:hidden 2xl:flex pl-4 flex justify-between items-center w-full`}
            onClick={() => setUpsideDown(!upsideDown)}
          >
            <p>{label}</p>
            <IcoSelectArrow
              className={
                classArrow + (!upsideDown ? ' transform rotate-180 ' : ' ')
              }
            />
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
          </div>
        )}
      </div>
    </Link>
  );
}
