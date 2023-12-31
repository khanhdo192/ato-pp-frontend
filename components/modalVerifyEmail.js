import BtnLong from '@/components/btnLong';
import CommonText from '@/components/commonText';
import Divisor1 from '@/components/divisor1';
import ModalMain from '@/components/modalMain';
import ModalNewEmail from '@/components/modalNewEmail';
import SpinnerV2 from '@/components/spinnerV2';
import TextH2Email from '@/components/textH2Email';
import { postFetcher } from '@/lib/fetcher';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ModalVerifyEmail({
  isOpen,
  closeModal,
  userId,
  getFormValues,
  userEmail,
}) {
  const [invalidCode, setInvalidCode] = useState(false);
  const [validCode, setValidCode] = useState(false);
  const [wheelOn, setWheelOn] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      const values = getFormValues();
      const { productProviderName } = values;
      const body = { productProviderName, userId };
      await postFetcher(body)('/tester/auth/resend-verify-email');
    } catch (error) {
      if (error?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
      console.log(error);
    }
  };

  const CodeInput = () => {
    var digitStr = '';

    const codeChangeHandler = async event => {
      setValidCode(false);
      setInvalidCode(false);
      const element = event.target;
      if (element.value != '') {
        const nextSibling = element.nextElementSibling;
        nextSibling ? nextSibling.focus() : element.blur();
        digitStr += element.value;
      } else if (element.value == '') {
        const previousSibling = element.previousElementSibling;
        previousSibling ? previousSibling.focus() : element.blur();
      }

      if (digitStr.length >= 4) {
        setWheelOn(true, 4000);
        try {
          const values = getFormValues();
          let body = (({
            applicationType,
            fullName,
            sdkInformation,
            acsSupported,
            component,
            protocolVersion,
            productProviderName,
            productName,
            productReference,
            approvalExpirationDate,
            testScheduleFrom,
            testScheduleTo,
            noPlannedSchedule,
            acquirerName,
            launchDate,
          }) => ({
            applicationType,
            fullName,
            sdkInformation,
            acsSupported,
            component,
            protocolVersion,
            productProviderName,
            productName,
            productReference,
            approvalExpirationDate,
            testScheduleFrom,
            testScheduleTo,
            noPlannedSchedule,
            acquirerName,
            launchDate,
          }))(values);
          body = { ...body, verificationCode: digitStr, userId };
          const response = await postFetcher(body)('/tester/auth/signup');
          if (response?.rtnCode == '1') {
            setValidCode(true);
            setTimeout(() => {
              router.push('/login');
            }, 3000);
          }
        } catch (e) {
          console.error(e);
          if (e?.response?.data?.rtnCode === '9897') {
            router.push('/login');
          }
          setWheelOn(false);
          setInvalidCode(true);
        }
      }
    };
    const codeInputFields = new Array(4).fill(0).map((item, index) => (
      <input
        name={`${index}`}
        key={index}
        style={{
          width: '35px',
          height: '45px',
          borderStyle: 'solid',
          borderWidth: invalidCode ? '2px' : '1px',
          alignContent: 'flex-start',
          borderRadius: '10px',
          borderColor: invalidCode ? '#e73a32' : '#b1b1b1',
          textAlign: 'center',
        }}
        onChange={event => codeChangeHandler(event)}
        maxLength={1}
      />
    ));

    return <>{codeInputFields}</>;
  };

  return (
    <ModalMain isOpen={isOpen}>
      <ModalNewEmail>
        <div className="text-center mx-20">
          {validCode ? (
            <>
              <TextH2Email text="Email verified!." xtra="font-medium" />
              <TextH2Email
                text="Please allow 1 ~ 2 weeks for JCB team to preview and activate your account."
                xtra="font-light"
              />
            </>
          ) : !invalidCode ? (
            <>
              <TextH2Email
                text={`We detected a new email ${
                  userEmail ? 'to ' + userEmail : ''
                }`}
                xtra="font-light"
              />
              <TextH2Email
                text="A 4-digit verification code has been sent to your email address. 
                Please check your inbox and enter your code here"
                xtra="font-light"
              />
            </>
          ) : null}
        </div>

        {invalidCode ? (
          <div className="mx-18 gap-4 grid grid-cols-1">
            <CommonText
              text="Verification code not accepted."
              xtra={'text-center text-r-500'}
            />
            <CommonText
              text='If you did not get an email, please click "Go back" and recheck your email'
              xtra={'text-center font-light'}
            />
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-3 py-10 px-14 mx-12">
          {validCode ? (
            <>
              <a href="/login">
                <TextH2Email
                  xtra="text-b-800 text-center"
                  text="Redirecting you to login page..."
                  redicting
                />
              </a>
            </>
          ) : wheelOn ? (
            <SpinnerV2 />
          ) : (
            <>
              <div className="grid grid-cols-4 justify-items-center mb-8">
                <CodeInput className="" />
              </div>
              <div className="grid grid-cols-1 gap-3 ">
                <BtnLong
                  label="Resend code"
                  xtra={'w-full bg-r-50 text-white -mb-5'}
                  borderColor={'border-r-50'}
                  onClick={() => handleClick()}
                />

                <Divisor1 />

                <BtnLong
                  label="Go back"
                  xtra="w-full -mt-5"
                  onClick={closeModal}
                />
              </div>
            </>
          )}
        </div>
      </ModalNewEmail>
    </ModalMain>
  );
}
