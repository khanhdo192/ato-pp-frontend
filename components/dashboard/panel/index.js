import moment from 'moment';

const Panel = ({ user, product }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 mb-6">
      <div className="flex flex-col bg-blue-900 p-2 rounded-lg w-full md:w-1/2">
        <h1 className="text-white text-center pb-2 font-medium text-xl">
          Company Info
        </h1>
        <div className="bg-white p-4 rounded-lg flex-auto">
          <div className="flex flex-col lg:flex-row">
            <p className="min-w-menu">Company: </p>
            <p className="text-blue-500 break-all">{user?.companyName || ''}</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <p className="min-w-menu">Operator ID: </p>
            <p className="text-blue-500 break-all">
              {user?.operatorOpId || ''}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-blue-900 p-2 rounded-lg w-full md:w-1/2">
        <h1 className="text-white text-center pb-2 font-medium text-xl">
          Product Info
        </h1>
        <div className="bg-white p-4 rounded-lg flex-auto">
          <div className="flex flex-col lg:flex-row">
            <p className="min-w-menu">Component: </p>
            <p className="text-blue-500 break-all">{user?.component || ''}</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <p className="min-w-menu">Protocol Version: </p>
            <p className="text-blue-500 break-all">
              {user?.protocol_version || ''}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <p className="min-w-menu">JSecure Approval Date: </p>
            <p className="text-blue-500 break-all">
              {user?.approvalDate
                ? moment(user?.approvalDate).format('YYYY-MM-DD')
                : 'N/A'}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <p className="min-w-menu">JSecure Approval Status: </p>
            <p className="text-blue-500 break-all">
              {user?.productStatus ? user?.productStatus : 'N/A'}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <p className="min-w-menu">JSecure Approval Expiration: </p>
            <p className="text-blue-500 break-all">
              {product?.[0].locExpiredDate
                ? moment(product?.[0].locExpiredDate).format('YYYY-MM-DD')
                : 'N/A'}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <p className="min-w-menu">LoA Reference Number: </p>
            <p className="text-blue-500 break-all">
              {user?.loa_reference || ''}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <p className="min-w-menu">LoA Expiration: </p>
            <p className="text-blue-500 break-all">
              {user?.loaApprovalExpirationDate
                ? user?.loaApprovalExpirationDate
                : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Panel };
