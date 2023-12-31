import HomeTableRow from '@/components/homeTableRow';
import { useCallback, useState } from 'react';

export default function HomeTableRowWithOptions({ product, background, user }) {
  const [showOptions, setShowOptions] = useState(false);

  const operatorStatusName = useCallback(
    id => {
      switch (id?.toString()) {
        case '001':
          return 'New Operator';
        case '002':
          return 'Compliance Renewal';
        case '003':
          return 'New Protocol';
        case '101':
          return 'Information Update';
        case '102':
          return 'Update Requested';
        case '201':
          return 'Access Approved';
        case '202':
          return 'Access Expiring';
        case '203':
          return 'Access Expired';
        case '204':
          return 'Access Rejected';
        case '301':
          return 'Account Closed';
        default:
          return 'Status not found';
      }
    },
    [user]
  );

  return (
    <tr
      className={`text-xs text-gr-700 text-center h-10
    border-t lg:border-t-0 lg:border-b border-b-200 ${
      background ? background : ''
    }`}
    >
      <HomeTableRow
        data={[
          product.productName,
          product.protocolVersion,
          product.trackingNumber ? product.trackingNumber : '-',
          operatorStatusName(user?.operatorStatus),
          product.productStatusName,
          product.createDate,
          product.createDate,
          product.owner,
          product.productId,
          product.locApprovalDate ? product.locApprovalDate : '-',
        ]}
        isOpen={showOptions}
        onClick={() => setShowOptions(!showOptions)}
        product={product}
      />
    </tr>
  );
}
