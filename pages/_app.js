<<<<<<< HEAD
import ModalLockScreen from '@/components/lock-screen';
import { withAuth } from '@/lib/session';
import useUserInfo from '@/lib/useUserInfo';
import ProgressBar from '@badrap/bar-of-progress';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
=======
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';
import { withAuth } from '@/lib/session';
import useUser from '@/lib/useUser';
import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import ModalLockScreen from '@/components/lockScreen';
import Head from 'next/head';
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
import '../styles/index.css';

const progress = new ProgressBar({
  size: 2,
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  const [isIdle, setIsIdle] = useState(false);

  const handleOnIdle = () => {
    if (
      Router.pathname !== '/login' &&
<<<<<<< HEAD
      Router.pathname !== '/register' &&
      Router.pathname !== '/password-reset' &&
      Router.pathname !== '/password-expired' &&
      Router.pathname !== '/change-password' &&
      Router.pathname !== '/access-expired' &&
      Router.pathname !== '/access-expired/reactivation-form/[userId]' &&
      Router.pathname !== '/certify-new-protocol-version/[userId]' &&
      Router.pathname !== '/information-update/[userId]' &&
      Router.pathname !== '/re-certify-product/[userId]'
=======
      Router.pathname !== '/password-reset' &&
      Router.pathname !== '/change-password/[token]'
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    ) {
      setIsIdle(true);
      localStorage.setItem('isIdle', true);
    } else {
      setIsIdle(false);
      localStorage.setItem('isIdle', false);
    }
  };
<<<<<<< HEAD

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * 30,
    onIdle: handleOnIdle,
    debounce: 1000,
  });

  useEffect(() => {
    const localIdle = localStorage.getItem('isIdle')
      ? localStorage.getItem('isIdle')
      : false;
    if (localIdle === 'true') {
      setIsIdle(true);
    } else {
      setIsIdle(false);
    }
  }, [getRemainingTime]);

  const { userInfo } = useUserInfo(
    !!pageProps?.user ? pageProps?.user?.userIdHash : null
  );

  useEffect(() => {
    if (
      !!userInfo &&
      userInfo?.expired &&
      !userInfo?.hasExpiredRequestBeenCompleted
    ) {
      Router.push('/access-expired');
    }

    if (
      Router.pathname !== '/login' &&
      Router.pathname !== '/register' &&
      Router.pathname !== '/password-reset' &&
      Router.pathname !== '/password-expired' &&
      Router.pathname !== '/change-password' &&
      Router.pathname !== '/access-expired' &&
      Router.pathname !== '/access-expired/reactivation-form/[userId]' &&
      Router.pathname !== '/certify-new-protocol-version/[userId]' &&
      Router.pathname !== '/information-update/[userId]' &&
      Router.pathname !== '/re-certify-product/[userId]'
    ) {
      if (!!userInfo && [3, 4, 101, 102].includes(userInfo?.operatorStatus)) {
        Router.push('/applicable-process');
      }
    }
  }, [userInfo]);

  return (
    <>
      <Head>
        <title>J/Secure | Test Platform</title>
      </Head>
      <Component {...pageProps} user={userInfo} />
      {isIdle && <ModalLockScreen isOpen={isIdle} setIsOpen={setIsIdle} />}
    </>
  );
}

const PAGES_WITHOUT_AUTH = [
  'LoginPage',
  'RegisterPage',
  'PasswordResetPage',
  'ChangePasswordPage',
  'PasswordExpired',
  'InformationUpdatePage',
=======

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * 30,
    onIdle: handleOnIdle,
    debounce: 1000,
  });

  useEffect(() => {
    const localIdle = localStorage.getItem('isIdle')
      ? localStorage.getItem('isIdle')
      : false;
    if (localIdle === 'true') {
      setIsIdle(true);
    } else {
      setIsIdle(false);
    }
  }, [getRemainingTime]);

  const { user } = useUser({ initialData: pageProps?.user });

  return (
    <>
      <Head>
        <title>J/Secure | Admin Platform</title>
      </Head>
      <Component {...pageProps} user={user} />
      {isIdle && <ModalLockScreen isOpen={isIdle} setIsOpen={setIsIdle} />}
    </>
  );
}

const PAGES_WITHOUT_AUTH = [
  'LoginPage',
  'PasswordResetPage',
  'ChangePasswordPage',
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
];
MyApp.getInitialProps = async ({ router, Component, ctx }) => {
  if (ctx.req) {
    const { pageProps, redirect } = await withAuth(ctx => ctx)(ctx);

    if (redirect && !PAGES_WITHOUT_AUTH.includes(Component.name)) {
      if (ctx.pathname != '/500') {
        ctx.res.writeHead(302, { Location: redirect.destination });
        ctx.res.end();
      }
      return {
        pageProps: {},
      };
    }

    return {
      pageProps,
    };
  }

  return {
    pageProps: {},
  };
};

export default MyApp;
