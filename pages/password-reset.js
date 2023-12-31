<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/container';
import { IcoWhiteLeftArrow } from '@/components/icons';
import CommonText from '@/components/commonText';
import { IcoWhiteRightArrow } from '@/components/icons';
import LoginInputV2 from '@/components/loginInputV2';
import LoginInputOpId from '@/components/loginInputOpId';
import ProductComponent from '@/components/productComponent';
import { IcoSuccess } from '@/components/icons';
import { emailIsValid } from '@/utils/validator';
import { useRouter } from 'next/router';
import { postFetcher } from '@/lib/fetcher';
import { animated, useSpring } from '@react-spring/web';

const optionsCheckbox = {
  iKnowIds: 'knowIDs',
  iDontKnowIds: 'dontKnowId',
};

const PRODUCT_COMPONENTS_NAME_BY_OPERATOR_ID = {
  ACS: 'ACS',
  '3DSS': '3DS',
  DS: 'DS',
  SDK: 'SDK',
};

const FormProgress = ({ currentStep }) => (
  <div className="flex items-center">
    {3 >= 1 ? (
      <input
        type="radio"
        className="p-2 mr-2"
        disabled
        checked={1 <= currentStep}
      />
    ) : null}
    {3 >= 2 ? (
      <input
        type="radio"
        disabled
        className="p-2 mr-2"
        checked={2 <= currentStep}
      />
    ) : null}
    {3 >= 3 ? (
      <input type="radio" disabled className="p-2" checked={3 <= currentStep} />
    ) : null}
  </div>
=======
import Btn from '@/components/btn';
import Container from '@/components/container';
import ContainerCol_2 from '@/components/containerCol_2';
import FeedbackMsg from '@/components/feedbackMsg';
import LoginInput from '@/components/loginInput';
import Spinner from '@/components/spinner';
import { postFetcher } from '@/lib/fetcher';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import Link from 'next/link';

const validEmailExpresion = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
);

export default function PasswordResetPage() {
  const router = useRouter();
<<<<<<< HEAD
  const [currentOption, setCurrentOption] = useState('');
  const [showEmail, setShowEmail] = useState(false);
  const [page, setPage] = useState(1);
  const [userId, setUserId] = useState('');
  const [operatorId, setOperatorId] = useState('');
  const [comporateEmail, setComporateEmail] = useState('');
  const [productComponentName, setProductComponentName] = useState('ACS');
  const [correctEmail, setCorrectEmail] = useState(false);
  const [sendIncorrectly, setSendIncorrectly] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [resetAnimation, setResetAnimation] = useState(false);

  useEffect(() => {
    const componentNameInOperatorID = !!operatorId && operatorId.split('_')[1];
    const componentName =
      PRODUCT_COMPONENTS_NAME_BY_OPERATOR_ID[componentNameInOperatorID];
    if (!!componentName) setProductComponentName(componentName);
  }, [operatorId]);

  const changeCheckbox = value => {
    setCurrentOption(value);
    if (value == optionsCheckbox.iDontKnowIds) setShowEmail(true);
    else setShowEmail(false);
  };

  const handlePage = async (e, value) => {
    e.preventDefault();
    if (page !== 3) {
      setResetAnimation(true);
    }

    if (value == 3) {
      if (!correctEmail) {
        setSendIncorrectly(true);
        return;
      } else {
        try {
          const res = await postFetcher({
            operatorId,
            userId,
            email: comporateEmail,
          })('/tester/auth/reset');
          if (res.rtnCode == '1') {
            setPage(value);
            setTimeout(() => {
              router.push('/login');
            }, 2000);
          } else {
            setErrorMsg(true);
          }
        } catch (error) {
          console.log(error);
          if (error?.response?.data?.rtnCode === '9897') {
            router.push('/login');
          }
          setErrorMsg(true);
          setTimeout(() => {
            setErrorMsg(false);
          }, 5000);
          return;
        }
      }
    }
    setPage(value);
  };

  const checkEmail = value => {
    setComporateEmail(value);
    if (emailIsValid(value)) {
      setCorrectEmail(true);
    } else {
      setCorrectEmail(false);
    }
  };

  const goToLogin = () => {
    router.push('/login');
  };

  const [springStyle] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      reset: resetAnimation,
    }),
    [page]
  );

  return (
    <main className="flex items-center justify-center h-screen w-full">
      <form className="p-3 w-full flex justify-center">
        <Container xtra="flex flex-col border-b-950 border-t-8 rounded-md shadow-2xl 2xl:w-2/5">
          <div className="flex items-right justify-end">
            <Image
              width="95"
              height="55"
              src="/images/jcb_logo_login.png"
              alt="JCB"
            />
          </div>
          <Container xtra="m-n">
            <animated.div style={springStyle} className="md:pb-40 pb-20">
              <div className="flex flex-col justify-between px-3 sm:px-6 md:px-12">
                <h1 className="text-b-950 text-3xl font-medium h3">
                  Password reset
                </h1>
                {page == 1 && (
                  <>
                    <h2 className="font-semibold text-base mb-6">
                      Please select your password reset option
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                      <input
                        className="no-sel-input w-5 h-5 rounded-full cursor-pointer"
                        type="checkbox"
                        id={optionsCheckbox.iKnowIds}
                        onChange={e => changeCheckbox(optionsCheckbox.iKnowIds)}
                        checked={currentOption == optionsCheckbox.iKnowIds}
                      />
                      <label for={optionsCheckbox.iKnowIds}>
                        I know my company's Operator ID and the User ID
                      </label>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                      <input
                        className="no-sel-input w-5 h-5 rounded-full cursor-pointer"
                        type="checkbox"
                        id={optionsCheckbox.iDontKnowIds}
                        onChange={e =>
                          changeCheckbox(optionsCheckbox.iDontKnowIds)
                        }
                        checked={currentOption == optionsCheckbox.iDontKnowIds}
                      />
                      <label for={optionsCheckbox.iDontKnowIds}>
                        I don't know my company's Operator ID and the User ID
                      </label>
                    </div>
                    {showEmail && (
                      <div className="flex flex-col justify-center gap-4">
                        <p className="font-medium md:text-lg">
                          Please contact us at the below address so we can
                          address your needs.
                        </p>
                        <p className="flex justify-center md:text-xl text-b-300">
                          jsecure-test-platform@info.jcb.co.jp
                        </p>
                      </div>
                    )}
                  </>
                )}
                {page == 2 && (
                  <>
                    <h2 className="font-semibold text-base mb-6">
                      Please select your password reset option
                    </h2>
                    <p>User ID*</p>
                    <LoginInputV2
                      isRequired
                      type="text"
                      placeholder="User ID"
                      value={userId}
                      onChange={setUserId}
                    />
                    <p>Operator ID*</p>
                    <div className="inline-flex">
                      <LoginInputOpId
                        isRequired
                        type="text"
                        placeholder="Operator ID"
                        value={operatorId}
                        onChange={setOperatorId}
                      />
                      <ProductComponent
                        name={productComponentName}
                        className="justify-center"
                      />
                    </div>
                    <p>Your Corporate Email*</p>
                    <LoginInputV2
                      isRequired
                      type="email"
                      placeholder="example@gmail.com"
                      value={comporateEmail}
                      onChange={checkEmail}
                    />
                    {sendIncorrectly ? (
                      <small className="text-red-400">Invalidad email</small>
                    ) : null}
                    <h1 className="text-xl font-semibold h3 mt-4">Important</h1>
                    <ul className="list-disc">
                      <li className="ml-12">
                        Please ensure the provided information are accurate.
                      </li>
                    </ul>
                  </>
                )}
                {page == 3 && (
                  <div className="grid grid-cols-1 mt-10">
                    <IcoSuccess
                      className="self-center justify-self-center w-14 h-14"
                      style={{ fill: '#4ade80' }}
                    />
                    <p className="self-center justify-self-center font-semibold mt-4 text-2xl">
                      Thank you!
                    </p>
                    <p className="self-center justify-self-center font-normal mt-1 text-lg w-3/4">
                      Your password reset was accepted, please check your email
                      address for the password reset link.
                    </p>
                    <p className="self-center justify-self-center text-blue-400 mt-8">
                      Redirecting you to login page..
                    </p>
                  </div>
                )}
              </div>
            </animated.div>
            {errorMsg && (
              <div className="flex justify-center mb-5">
                <p className="font-normal text-lg text-red-400">
                  Wrong User ID, Operator ID or Corporate Email
                </p>
              </div>
            )}
            <div className="flex justify-around items-center">
              {page == 1 || page == 2 ? (
                <div className="inline-flex">
                  <div className="flex items-center">
                    {page == 2 ? (
                      <button
                        className="flex items-center border-none"
                        onClick={e => handlePage(e, page - 1)}
                      >
                        <div
                          className={`inline-flex items-center justify-center w-11 h-11 bg-b-950 rounded-full shadow-icon`}
                        >
                          <IcoWhiteLeftArrow className="w-6 h-6 text-p-500" />
                        </div>
                        <div className="pt-0.5 ml-2">
                          <CommonText
                            xtra="font-medium text-xl text-b-950"
                            text="Back"
                          />
                        </div>
                      </button>
                    ) : page == 1 ? (
                      <button
                        className="flex items-center border-none"
                        onClick={() => goToLogin()}
                      >
                        <div
                          className={`inline-flex items-center justify-center w-11 h-11 bg-b-950 rounded-full shadow-icon`}
                        >
                          <IcoWhiteLeftArrow className="w-6 h-6 text-p-500" />
                        </div>
                        <div className="pt-0.5 ml-2">
                          <CommonText
                            xtra="font-medium text-xl text-b-950"
                            text="Back"
                          />
                        </div>
                      </button>
                    ) : (
                      <div className="flex items-center border-none">
                        <div
                          className={`inline-flex items-center justify-center w-11 h-11 bg-b-950 rounded-full shadow-icon ${
                            page == 1 ? 'opacity-40' : ''
                          }`}
                        >
                          <IcoWhiteLeftArrow className="w-6 h-6 text-p-500" />
                        </div>
                        <div className="pt-0.5 ml-2">
                          <CommonText
                            xtra="font-medium text-xl text-b-950"
                            text="Back"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
              <div className="hidden sm:block">
                <FormProgress currentStep={page} />
              </div>
              {page == 1 || page == 2 ? (
                <div className="inline-flex">
                  <div className="flex items-center">
                    {page == 1 && currentOption == optionsCheckbox.iKnowIds ? (
                      <button
                        className="flex items-center border-none"
                        onClick={e => handlePage(e, page + 1)}
                      >
                        <div className="pt-0.5 mr-2">
                          <CommonText
                            xtra="font-medium text-xl text-b-950"
                            text="Next"
                          />
                        </div>
                        <div
                          className={
                            'inline-flex items-center justify-center w-11 h-11 bg-b-950 rounded-full shadow-icon '
                          }
                        >
                          <IcoWhiteRightArrow className="w-6 h-6 text-p-500 fill-current" />
                        </div>
                      </button>
                    ) : page == 2 ? (
                      <button
                        className="flex items-center border-none"
                        onClick={e => handlePage(e, page + 1)}
                      >
                        <div className="pt-0.5 mr-2">
                          <CommonText
                            xtra="font-medium text-xl text-b-950"
                            text="Next"
                          />
                        </div>
                        <div
                          className={
                            'inline-flex items-center justify-center w-11 h-11 bg-b-950 rounded-full shadow-icon opacity-40' +
                            (!!userId &&
                            !!operatorId &&
                            emailIsValid(comporateEmail)
                              ? 'opacity-40'
                              : '')
                          }
                        >
                          <IcoWhiteRightArrow className="w-6 h-6 text-p-500 fill-current" />
                        </div>
                      </button>
                    ) : (
                      <div className="flex items-center border-none">
                        <div className="pt-0.5 mr-2">
                          <CommonText
                            xtra="font-medium text-xl text-b-950"
                            text="Next"
                          />
                        </div>
                        <div
                          className={
                            'inline-flex items-center justify-center w-11 h-11 bg-b-950 rounded-full shadow-icon opacity-40'
                          }
                        >
                          <IcoWhiteRightArrow className="w-6 h-6 text-p-500 fill-current" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="sm:hidden flex justify-center mt-8">
              <FormProgress currentStep={page} />
            </div>
          </Container>
        </Container>
=======
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [errorMsg, setErrorMsg] = useState({
    isFeedback: false,
    message: '',
    type: '',
  });

  const handleEmail = useCallback(value => {
    setEmail(value);
  }, []);

  const handlePasswordReset = async () => {
    if (!email) {
      return setErrorMsg({
        isFeedback: true,
        message: 'Please enter your email!',
        type: 'error',
      });
    }
    const emailValid = validEmailExpresion.test(email);

    if (emailValid) {
      setStatus('busy');
      try {
        const body = {
          email,
        };

        const res = await postFetcher(body)(
          `${process.env.NEXT_PUBLIC_HOST}/api/auth/reset`
        );

        if (res.rtnCode === '1') {
          setStatus('success');
          setErrorMsg({
            isFeedback: true,
            message:
              'Your password reset was accepted, please check your email address for the password reset link.',
            type: 'success',
          });
          setTimeout(() => {
            router.push('/login');
          }, 5000);
        } else {
          setErrorMsg({
            isFeedback: true,
            message: res?.message,
            type: 'error',
          });
        }
      } catch (error) {
        console.log(error);
        if (error?.response?.data?.rtnCode === '9897') {
          router.push('/login');
        }
        setErrorMsg({
          isFeedback: true,
          message: error?.message,
          type: 'error',
        });
        setStatus('error');
      }
    } else {
      setStatus('error');
      setErrorMsg({
        isFeedback: true,
        message: 'Email invalid',
        type: 'error',
      });
    }
  };

  return (
    <main className="flex w-full min-h-screen items-center justify-center px-2 flex-col">
      <form>
        <Container xtra="w-full max-w-screen-xs lg:max-w-login h-mt mt-3 lg:mt-0">
          <ContainerCol_2>
            <Container
              hasBorder
              xtra="flex items-center justify-center mb-3 lg:mb-0"
            >
              <div className="">
                <Image
                  width="135"
                  height="79"
                  src="/images/jcb_logo_login.png"
                  alt="JCB"
                />
              </div>
            </Container>
            {status === 'busy' ? (
              <div className="flex flex-grow items-center justify-center h-full w-full">
                <Spinner isLoading />
              </div>
            ) : (
              <Container xtra="bg-b-800 m-n">
                <div className="flex flex-col justify-between">
                  <p className="text-sm text-white tracking-wider text-center p-6">
                    Reset password
                  </p>

                  {errorMsg.isFeedback ? (
                    <FeedbackMsg type={errorMsg.type} text={errorMsg.message} />
                  ) : null}
                  <LoginInput
                    id="email"
                    type="text"
                    placeholder="Enter email"
                    ico="mail"
                    value={email}
                    onChange={handleEmail}
                  />
                  <Btn
                    label="Send Password Reset Link"
                    xtra="mt-4"
                    onClick={() => handlePasswordReset()}
                  />
                </div>
              </Container>
            )}
          </ContainerCol_2>
        </Container>
        <div className="h-mt mt-3 lg:mt-0">
          <Link href="/login">
            <a className="cursor-pointer float-right hover:text-blue-700 text-blue-500 font-bold">
              Back to login
            </a>
          </Link>
        </div>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      </form>
    </main>
  );
}
