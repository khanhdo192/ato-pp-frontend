import BtnLong from '@/components/btnLong';
import CommonText from '@/components/commonText';
import Container from '@/components/container';
import TextH1Login from '@/components/textH1Login';
import { fetcher } from '@/lib/fetcher';
import useUser from '@/lib/useUser';
import useUserInfo from '@/lib/useUserInfo';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

export default function ApplicableProcessPage() {
  const { user, mutateUser } = useUser({ redirectTo: '/login' });
  const [advanced, setAdvanced] = useState(false);
  const { NEXT_PUBLIC_HOST } = process.env;
  const router = useRouter();
  const { userInfo } = useUserInfo(!!user ? user?.userIdHash : null);

  const goToDashboard = () => {
    router.push('/dashboard');
  };

  const goToInformationUpdate = () => {
    const { userIdHash: userId } = userInfo;
    router.push(`/information-update/${userId}`);
  };

  const goToCertifyNewProtocolVersion = () => {
    const { userIdHash: userId } = userInfo;
    router.push(`/certify-new-protocol-version/${userId}`);
  };

  const goToReCertifyProduct = () => {
    const { userIdHash: userId } = userInfo;
    router.push(`/re-certify-product/${userId}`);
  };

  const handleLogout = async () => {
    await mutateUser(
      fetcher(`${NEXT_PUBLIC_HOST}/api/auth/sign-out`).catch(error => {
        if (error?.response?.data?.rtnCode === '9897') {
          router.reload();
        }
      })
    );
  };

  const springStyle = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0,-30%,0)',
    },
    to: {
      opacity: advanced ? 1 : 0,
      transform: advanced ? 'translate3d(0,0%,0)' : 'translate3d(0,-30%,0)',
    },
  });

  return (
    <main className="flex w-full min-h-screen sm:items-center justify-center flex-col p-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container
          className
          xtra="w-full max-w-screen-modal-md lg:max-w-login h-mt mt-3 border-b-950 border-t-8 rounded-md shadow-2xl"
          style="min-height: 980px"
        >
          <div className="flex items-right justify-end">
            <Image
              width="90"
              height="60"
              src="/images/jcb_logo_login.png"
              alt="JCB"
            />
          </div>
          <div className="text-center grid grid-cols-1 gap-3 px-3 sm:px-6 md:px-18">
            <TextH1Login
              classname=""
              text="Please select your applicable process"
            />
            <BtnLong
              xtra="bg-b-950"
              label={`${
                userInfo?.operatorStatus === 101 ||
                userInfo?.operatorStatus === 4 ||
                userInfo?.operatorStatus === 3 ||
                userInfo?.operatorStatus === 102
                  ? 'Application Under Approval'
                  : 'Begin Testing'
              }`}
              isDisable={
                userInfo?.operatorStatus === 101 ||
                userInfo?.operatorStatus === 4 ||
                userInfo?.operatorStatus === 3 ||
                userInfo?.operatorStatus === 102
              }
              onClick={() => goToDashboard()}
            />
            {userInfo?.operatorStatus !== 101 && (
              <CommonText
                xtra="text-lg"
                text="Return to your Dashboard for an ongoing product certification"
              />
            )}
            <BtnLong
              label="Information Update"
              xtra={`${
                userInfo?.productStatus === 102 ||
                userInfo?.productStatus === 203 ||
                userInfo?.operatorStatus === 4 ||
                userInfo?.operatorStatus === 3 ||
                userInfo?.operatorStatus === 101
                  ? 'text-blck-100 bg-gr-750 border border-blck-100'
                  : 'bg-b-950 text-white'
              }`}
              isDisable={
                userInfo?.productStatus === 102 ||
                userInfo?.productStatus === 203 ||
                userInfo?.operatorStatus === 4 ||
                userInfo?.operatorStatus === 3 ||
                userInfo?.operatorStatus === 101
              }
              onClick={() => goToInformationUpdate()}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 px-3 sm:px-6 md:px-18">
            <div className="text-center grid grid-cols-1 gap-3 mt-5">
              <CommonText
                xtra="text-xl text-left"
                text="Select this option if any of the below applies:"
              />
            </div>
            <div className="text-left">
              <CommonText
                xtra="text-base ml-4 sm:ml-10"
                text="• Your recent certification application was rejected and you need to update the information."
              />
              <CommonText
                xtra="text-base ml-4 sm:ml-10"
                text="• You need to update general company or product information."
              />
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start px-3 py-5 sm:px-6 md:px-18 gap-2 sm:gap-4">
            <CommonText
              xtra="text-xl font-medium sm:font-normal sm:text-2xl"
              text="Advanced Process"
            />
            {advanced ? (
              <img
                className="transform rotate-180 cursor-pointer w-10"
                src="/images/arrowButton.png"
                onClick={() => setAdvanced(false)}
              />
            ) : (
              <img
                className="transform cursor-pointer w-10"
                src="/images/arrowButton.png"
                onClick={() => setAdvanced(true)}
              />
            )}
          </div>
          {advanced && (
            <animated.div
              className="grid grid-cols-1 gap-3 mb-5 px-3 sm:px-6 md:px-18"
              style={springStyle}
            >
              <BtnLong
                label="Re-Certify Or Major product changes"
                xtra={`${
                  !(
                    userInfo?.productStatus === 'Compliance Expiring' ||
                    userInfo?.productStatus === 'Compliance Expired' ||
                    userInfo?.productStatus === 'Compliance Letter Issued'
                  ) ||
                  userInfo?.operatorStatus === 4 ||
                  userInfo?.operatorStatus === 102
                    ? 'text-blck-100 bg-gr-750 border border-blck-100'
                    : 'bg-b-950 text-white'
                }`}
                isDisable={
                  !(
                    userInfo?.productStatus === 'Compliance Expiring' ||
                    userInfo?.productStatus === 'Compliance Expired' ||
                    userInfo?.productStatus === 'Compliance Letter Issued'
                  ) ||
                  userInfo?.operatorStatus === 4 ||
                  userInfo?.operatorStatus === 102
                }
                onClick={() => goToReCertifyProduct()}
              />
              <CommonText
                xtra="text-lg text-left"
                text="Select this option if you need certify/re-certify an existing product.
              This option applies if any of the below conditions are met:"
              />
              <div className="text-left">
                <CommonText
                  xtra="text-base ml-4 sm:ml-10"
                  text="• Your products current LoC with JCB is expiring soon."
                />
                <CommonText
                  xtra="text-base ml-4 sm:ml-10"
                  text="• Your products current LoC with JCB is expired."
                />
                <CommonText
                  xtra="text-base ml-4 sm:ml-10"
                  text="• There are updates in your product which will cause changes in transaction behavior."
                />
                <CommonText
                  xtra="text-base ml-4 sm:ml-10"
                  text="• You need to modify existing product or certification settings."
                />
              </div>
              <BtnLong
                label="Certify a new protocol version"
                xtra={`${
                  userInfo?.protocol_version !== '2.1.0' ||
                  userInfo?.operatorStatus === 3 ||
                  userInfo?.operatorStatus === 102
                    ? 'text-blck-100 bg-gr-750 border border-blck-100'
                    : 'bg-b-950 text-white'
                }`}
                isDisable={
                  userInfo?.protocol_version !== '2.1.0' ||
                  userInfo?.operatorStatus === 3 ||
                  userInfo?.operatorStatus === 102
                }
                onClick={() => goToCertifyNewProtocolVersion()}
              />
              <CommonText
                xtra="text-lg"
                text="Select this option if you wish to certify a new protocol version which has never received a LoC from JCB. "
              />
              <BtnLong
                xtra="bg-b-950"
                label="Logout"
                onClick={() => handleLogout()}
              />
            </animated.div>
          )}
          <a href="#" className="text-b-300 px-3 sm:px-6 md:px-18">
            Need Help? Download our guide
          </a>
        </Container>
      </motion.div>
    </main>
  );
}
