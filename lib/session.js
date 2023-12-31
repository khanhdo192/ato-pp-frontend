import axios from 'axios';
import { withIronSession } from 'next-iron-session';

export default function withSession(handler) {
  return withIronSession(handler, {
<<<<<<< HEAD
    password: '5c5qCRUUo2LZ7GMRgHyEwUQQ74gjpaDK', // process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'https://www.atomworks.io/pp/',
=======
    password: '4c5qCRUUo2LZ7GMRgHyEwUQQ74gjpaDK',
    cookieName: 'https://www.atomworks.io/',
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    cookieOptions: {
      secure: false, // process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      httpOnly: true,
    },
  });
}

export function withAuth(handler) {
  function _withAuth(handler) {
    return async context => {
      const { req } = context;
      try {
        const user = req.session.get('user');
        const menus = req.session.get('menus');
        let jwt = req.session.get('jwt');

        if (!user) {
          throw 'No user';
        }

        if (jwt) {
          const newJwt = await jwtRefresh(jwt);
          if (newJwt) {
            session.set('jwt', newJwt);
            jwt = newJwt;
          }
        }

        const newCtx = {
          ...context,
          pageProps: {
            user,
            jwt,
            menus,
          },
        };

        return handler(newCtx);
      } catch (e) {
        console.log('no user or token refresh failed, login again');
        req.session.destroy();
        const redirectUrl = context?.asPath;
<<<<<<< HEAD
        if (
          !!redirectUrl &&
          redirectUrl != '/login' &&
          redirectUrl != '/dashboard'
        ) {
=======
        if (!!redirectUrl && redirectUrl != '/login') {
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
          return {
            redirect: {
              destination: `/login?redirect=${redirectUrl}`,
              permanent: false,
            },
          };
        }
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        };
      }
    };
  }

  return withSession(_withAuth(handler));
}

export async function jwtRefresh(sessionJwt) {
  const { refreshTime, accessToken, refreshToken } = sessionJwt;

  const dateRefreshTime = new Date(refreshTime);
  const dateNow = new Date();

  if (dateRefreshTime.valueOf() >= dateNow.valueOf()) {
    return null;
  }

  const { message, result } = await axios.post(
<<<<<<< HEAD
    process.env.NEXT_PUBLIC_API_URL + '/tester/auth/newToken',
=======
    process.env.NEXT_PUBLIC_API_URL + '/jcb/auth/newToken',
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    { refreshToken: refreshToken }
  );

  const { jwt } = result;

  return jwt;
}
