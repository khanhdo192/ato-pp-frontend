import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/container';
import BtnColor from '@/components/BtnColor';
import Divisor1 from '@/components/divisor1';
import useUser from '@/lib/useUser';
import { useRouter } from 'next/router';
import { fetcher } from '@/lib/fetcher';
import Link from 'next/link';

export default function AccessExpiredPage() {
  const [userId, setUserId] = useState('');
  const [isExpired, setIsExpired] = useState(false);
  const { user, mutateUser } = useUser({ redirectTo: '/login' });
  const router = useRouter();
  const { NEXT_PUBLIC_HOST } = process.env;

  useEffect(() => {
    if (!!user && !user?.expired && !isExpired) {
      router.push('/applicable-process');
    } else {
      setIsExpired(true);
    }
    if (!userId && !!user) {
      setUserId(user?.userIdHash);
    }
  }, [user]);

  const handleLogout = async e => {
    e.preventDefault();
    await mutateUser(
      fetcher(`${NEXT_PUBLIC_HOST}/api/auth/sign-out`).catch(error => {
        if (error?.response?.data?.rtnCode === '9897') {
          router.reload();
        }
      })
    );
  };

  if (!!user) {
    return (
      <main className="flex w-full min-h-screen sm:items-center justify-center flex-col">
        <form className="px-4 max-w">
          <Container xtra="w-full max-w-screen-modal-md lg:max-w-screen-md h-mt mt-3 border-b-950 border-t-8 rounded-md shadow-2xl">
            <div className="flex items-right justify-end">
              <Image
                width="95"
                height="55"
                src="/images/jcb_logo_login.png"
                alt="JCB"
              />
            </div>
            <Container xtra="m-n">
              <div className="flex flex-col justify-between px-2 md:px-12">
                {user?.userRoleId == 5 ? (
                  <>
                    <h1 className="text-b-950 text-2xl md:text-3xl mb-2 h3 font-bold">
                      Access expired
                    </h1>
                    <h1 className="tracking-wide text-base md:text-lg mb-6">
                      Your company's access has expired on{' '}
                      <a className="text-b-300 text-lg font-semibold">
                        {!!user?.expiredDate
                          ? user?.expiredDate.split('T')[0]
                          : 'Not found date'}
                      </a>
                      . To resume access please click the Next button.
                    </h1>
                  </>
                ) : (
                  <>
                    <h1 className="text-b-950 text-2xl md:text-3xl mb-2 h3 font-bold">
                      Access expired
                    </h1>
                    <h1 className="tracking-wide text-lg mb-6">
                      Your company's access has expired on{' '}
                      <a className="text-b-300 text-lg font-semibold">
                        {!!user?.expiredDate
                          ? user?.expiredDate.split('T')[0]
                          : 'Not found date'}
                      </a>
                      . To resume access please contact your company's account
                      Administrator.
                    </h1>
                    <h1 className="tracking-wide text-lg mb-6">
                      If you used non-admin credentials to login, please logout
                      and try again with Administrator credentials.
                    </h1>
                    <h1 className="text-xl font-bold">Notice</h1>
                    <h1 className="tracking-wide text-lg mb-4">
                      There is only one account Administrator per company. Only
                      the Adminstrator has the permission to submit a activation
                      request to JCB. Upon successful activation, all user
                      accounts affliated will resume access.
                    </h1>
                  </>
                )}
                <div className="flex flex-col md:flex-row">
                  <div>
                    <h1 className="tracking-wide text-lg md:text-xl mb-2 font-bold">
                      COMPANY INFO
                    </h1>
                    <div className="ml-7 md:ml-8">
                      <ul className="list-disc">
                        <li>
                          Company:
                          <p className="text-b-300 md:hidden pl-1">
                            {user?.className ? user?.companyName : 'N/A'}
                          </p>
                        </li>
                        <li>
                          Operator ID:
                          <p className="text-b-300 md:hidden pl-1">
                            {user?.operatorOpId ? user?.operatorOpId : 'N/A'}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <br />
                    <h1 className="tracking-wide text-lg md:text-xl mb-2 font-bold">
                      PRODUCT INFO
                    </h1>
                    <div className="ml-7 md:ml-8">
                      <ul className="list-disc">
                        <li>
                          Component:
                          <p className="text-b-300 md:hidden pl-1">
                            {user?.component ? user?.component : 'N/A'}
                          </p>
                        </li>
                        <li>
                          Protocol Version:
                          <p className="text-b-300 md:hidden pl-1">
                            {user?.protocol_version
                              ? user?.protocol_version
                              : 'N/A'}
                          </p>
                        </li>
                        <li>
                          J/Secure Approval Date:
                          <p className="text-b-300 md:hidden pl-1">
                            {user?.approvalDate
                              ? user?.approvalDate.split('T')[0]
                              : 'N/A'}
                          </p>
                        </li>
                        <li>
                          J/Secure Approval Status:
                          <p className="text-b-300 md:hidden pl-1">
                            {user?.productStatus ? user?.productStatus : 'N/A'}
                          </p>
                        </li>
                        <li>
                          J/Secure Approval Expiration:
                          <p className="text-b-300 md:hidden pl-1">
                            {user?.expiredDate
                              ? user?.expiredDate.split('T')[0]
                              : 'N/A'}
                          </p>
                        </li>
                        <li>
                          LoA Reference Number:
                          <p className="text-b-300 md:hidden pl-1 break-words">
                            {user?.loa_reference ? user?.loa_reference : 'N/A'}
                          </p>
                        </li>
                        <li>
                          LoA* Expiration:
                          <p className="text-b-300 md:hidden pl-1">
                            {user?.loaApprovalExpirationDate
                              ? user?.loaApprovalExpirationDate
                              : 'N/A'}
                          </p>
                        </li>
                      </ul>
                      <small>*Letter of Approval(loA)</small>
                    </div>
                  </div>
                  <div className="ml-5 hidden md:block">
                    <h1 className="tracking-wide text-xl mb-2 font-bold"></h1>
                    <div className="mt-9">
                      <ul className="list-none">
                        <li className="text-b-300">
                          {user?.companyName ? user?.companyName : 'N/A'}
                        </li>
                        <li className="text-b-300">
                          {user?.operatorOpId ? user?.operatorOpId : 'N/A'}
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div className="mt-9">
                      <ul className="list-none">
                        <li className="text-b-300">
                          {user?.component ? user?.component : 'N/A'}
                        </li>
                        <li className="text-b-300">
                          {user?.protocol_version
                            ? user?.protocol_version
                            : 'N/A'}
                        </li>
                        <li className="text-b-300">
                          {user?.approvalDate
                            ? user?.approvalDate.split('T')[0]
                            : 'N/A'}
                        </li>
                        <li className="text-b-300">
                          {user?.productStatus ? user?.productStatus : 'N/A'}
                        </li>
                        <li className="text-b-300">
                          {user?.expiredDate
                            ? user?.expiredDate.split('T')[0]
                            : 'N/A'}
                        </li>
                        <li className="text-b-300">
                          {user?.loa_reference ? user?.loa_reference : 'N/A'}
                        </li>
                        <li className="text-b-300">
                          {user?.loaApprovalExpirationDate
                            ? user?.loaApprovalExpirationDate
                            : 'N/A'}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                {user?.userRoleId == 5 ? (
                  <>
                    <Link href={`/access-expired/reactivation-form/${userId}`}>
                      <BtnColor
                        text="NEXT"
                        color="bg-p-500"
                        xtra="mt-4 cursor-pointer"
                      />
                    </Link>
                    <Divisor1 />
                  </>
                ) : null}
                <BtnColor
                  text="LOGOUT"
                  color="bg-p-500"
                  xtra="mt-4 cursor-pointer"
                  onClick={e => handleLogout(e)}
                />
                <br />
              </div>
            </Container>
          </Container>
        </form>
      </main>
    );
  } else {
    return '';
  }
}
