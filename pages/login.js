<<<<<<< HEAD
import upperFirst from 'lodash/upperFirst';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { postFetcher } from '@/lib/fetcher';
import useUser from '@/lib/useUser';
import Btn from '@/components/btn';
import BtnRegister from '@/components/btnRegister';
import Container from '@/components/container';
import Divisor1 from '@/components/divisor1';
import FeedbackMsg from '@/components/feedbackMsg';
import FormItemCheckbox from '@/components/formItemCheckbox';
import LoginInputOpId from '@/components/loginInputOpId';
import LoginInputV2 from '@/components/loginInputV2';
import ProductComponent from '@/components/productComponent';
import TextH1Login from '@/components/textH1Login';

const PRODUCT_COMPONENTS_NAME_BY_OPERATOR_ID = {
  ACS: 'ACS',
  '3DSS': '3DS',
  DS: 'DS',
  SDK: 'SDK',
};

export default function LoginPage() {
  const router = useRouter();
  const redirect = router?.query?.redirect;
  const { user } = useUser();
  const { mutateUser } = useUser({
    redirectTo: `${
      !!user && user?.expired && !user?.hasExpiredRequestBeenCompleted
        ? '/access-expired'
        : !!redirect
        ? redirect
        : '/applicable-process'
    }`,
    redirectIfFound: true,
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [userId, setUserId] = useState('');
  const [operatorId, setOperatorId] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMeActive, setIsRememberMeActive] = useState(false);
  const [productComponentName, setProductComponentName] = useState('ACS');

  useEffect(() => {
    if (!!localStorage.getItem('isRememberMeActive')) {
      setIsRememberMeActive(true);
      setUserId(localStorage.getItem('userId'));
      setOperatorId(localStorage.getItem('operatorId'));
      setPassword(localStorage.getItem('password'));
    }
  }, []);

  useEffect(() => {
    const componentNameInOperatorID = !!operatorId && operatorId.split('_')[1];
    const componentName =
      PRODUCT_COMPONENTS_NAME_BY_OPERATOR_ID[componentNameInOperatorID];
    if (!!componentName) setProductComponentName(componentName);
  }, [operatorId]);
=======
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { postFetcher } from '@/lib/fetcher';
import useUser from '@/lib/useUser';
import Btn from '@/components/btn';
import Container from '@/components/container';
import ContainerCol_2 from '@/components/containerCol_2';
import FeedbackMsg from '@/components/feedbackMsg';
import LoginInput from '@/components/loginInput';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const newPassword = router?.query?.newPassword;
  const redirect = router?.query?.redirect;
  const { mutateUser } = useUser({
    redirectTo: `${!!redirect ? redirect : '/'}`,
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [email, setEmail] = useState('');
  const handleEmail = email => setEmail(email);

  const [password, setPassword] = useState('');
  const handlePassword = password => setPassword(password);
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710

  const handleKeyDown = async e =>
    e.key.match('Enter') && (await handleSubmit(e));

  const handleSubmit = async e => {
    try {
      e.preventDefault();
<<<<<<< HEAD
      if (submitted) return;

      if (isRememberMeActive) {
        localStorage.setItem('isRememberMeActive', 'true');
        localStorage.setItem('userId', userId);
        localStorage.setItem('operatorId', operatorId);
        localStorage.setItem('password', password);
      } else {
        localStorage.setItem('isRememberMeActive', '');
        localStorage.setItem('userId', '');
        localStorage.setItem('operatorId', '');
        localStorage.setItem('password', '');
      }
=======

      const body = { email: email, password: password };
      if (submitted) return;
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710

      setSubmitted(true);
      setErrorMsg('');

<<<<<<< HEAD
      const body = { userId, operatorId, password };
      const response = await postFetcher(body)(
        `${process.env.NEXT_PUBLIC_HOST}/api/auth/sign-in`
      );
=======
      const response = await postFetcher(body)(
        `${process.env.NEXT_PUBLIC_HOST}/api/auth/sign-in`
      );

>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      if (response?.isLoggedIn) {
        await mutateUser(response);
      }
    } catch (error) {
<<<<<<< HEAD
      setErrorMsg(upperFirst(error?.response?.data?.message || ''));
=======
      setErrorMsg(error?.response?.data?.message || '');
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    } finally {
      setSubmitted(false);
    }
  };

  return (
<<<<<<< HEAD
    <main className="flex w-full min-h-screen sm:items-center justify-center flex-col">
      <form className="p-3" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <Container xtra="w-full max-w-screen-modal-md lg:max-w-login h-mt mt-3 border-b-950 border-t-8 rounded-md shadow-2xl">
          <div className="flex items-right justify-end">
            <Image
              width="95"
              height="55"
              src="/images/jcb_logo_login.png"
              alt="JCB"
            />
          </div>
          <Container xtra="m-n">
            <div className="flex flex-col justify-between sm:px-6 md:px-12">
              <TextH1Login text="Please login" />
              {errorMsg !== '' ? (
                <FeedbackMsg type="error" text={errorMsg} />
              ) : null}
              <p>User ID</p>
              <LoginInputV2
                isRequired
                type="text"
                placeholder="example"
                value={userId}
                onChange={setUserId}
              />
              <p>Operator ID</p>
              <div className="inline-flex">
                <LoginInputOpId
                  isRequired
                  type="text"
                  placeholder="xxxxxxxxxxxxxx"
                  value={operatorId}
                  onChange={setOperatorId}
                />
                <ProductComponent
                  name={productComponentName}
                  className="justify-center"
                />
              </div>
              <p>Password</p>
              <LoginInputV2
                isRequired
                type="password"
                placeholder="****************"
                value={password}
                onChange={setPassword}
              />
              <div className="inline-flex justify-between mt-3">
                <FormItemCheckbox
                  id="rememberMe"
                  label="Remember me"
                  xtra="select-none"
                  style={{ paddingLeft: 0 }}
                  isChequed={isRememberMeActive}
                  onClick={() => setIsRememberMeActive(!isRememberMeActive)}
                />
                <a
                  className="text-sm text-b-300 cursor-pointer"
                  onClick={() => router.push('/password-reset')}
                >
                  Forgot your password?
                </a>
              </div>
              <Btn
                label="LOGIN"
                xtra="mt-4 cursor-pointer"
                ico={submitted ? 'spinner' : null}
                isDisable={submitted || !userId || !operatorId || !password}
                onClick={handleSubmit}
              />
              <Divisor1 />
              <BtnRegister
                xtra="cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  router.push('/register');
                }}
              />
              <div className="flex flex-col gap-2 my-6 text-xs">
                <p className="mb-2">
                  If you are a new operator or would like to obtain a new 3DS or
                  ACS Operator ID please register a new account.
                </p>
                <p className="font-medium uppercase">
                  Weekly maintenance schedule
                </p>
                <p>
                  • Please note the J/Secure Test Platform has a Weekly
                  Maintenance schedule every Monday starting at 13:00 UTC and
                  ending at 16:00 UTC (22:00~25:00 JST).
                </p>
                <p>
                  • Irregular maintenance may occur at times other than above.
                </p>
              </div>
              <a href="#" className="text-b-300 text-base">
                Need Help? Download our guide
              </a>
            </div>
          </Container>
        </Container>
=======
    <main className="flex w-full min-h-screen items-center justify-center px-2 flex-col">
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
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
            <Container xtra="bg-b-800 m-n">
              <div className="flex flex-col justify-between">
                <p className="text-sm text-white tracking-wider text-center p-6">
                  Please login to access your 3-D Secure Testing Services.
                </p>

                {errorMsg !== '' ? (
                  <FeedbackMsg type="error" text={errorMsg} />
                ) : null}
                <LoginInput
                  isRequired
                  type="text"
                  placeholder="Email"
                  ico="mail"
                  value={email}
                  onChange={handleEmail}
                />
                <LoginInput
                  isRequired
                  type="password"
                  placeholder="Password"
                  ico="pass"
                  value={password}
                  onChange={handlePassword}
                />
                <Btn
                  label="Sign in"
                  xtra="mt-4 cursor-pointer"
                  ico={submitted ? 'spinner' : null}
                  isDisable={submitted || !email || !password}
                />
                {newPassword && (
                  <FeedbackMsg
                    type="success"
                    text={
                      'Password is updated. Please login using your new password.'
                    }
                  />
                )}
              </div>
            </Container>
          </ContainerCol_2>
        </Container>
        <div className="h-mt mt-3 lg:mt-0">
          <Link href="/password-reset">
            <a className="cursor-pointer float-right hover:text-blue-700 text-blue-500 font-bold">
              Forgot your password?
            </a>
          </Link>
        </div>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      </form>
    </main>
  );
}
