import axios from 'axios';
<<<<<<< HEAD
=======

>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
import withSession, { jwtRefresh } from '@/lib/session';

export default withSession(async (req, res) => {
  const user = req.session.get('user');
  let jwt = req.session.get('jwt');

  const forwarded = req.headers['x-forwarded-for'];

  const ipRes = forwarded
    ? forwarded.split(/, /)[0]
    : req.connection.remoteAddress;

  const {
    query: { path },
  } = req;

  const url = process.env.NEXT_PUBLIC_API_URL + '/' + path.join('/');

  if (!user) {
    return res.status(401).json({ isLoggedIn: false });
  }

  const { config } = req.body;
  delete req.body.config;
<<<<<<< HEAD

  try {
    const apiRes = await axios.post(url, req.body, {
      ...(config || {
        headers: {
          Authorization: jwt?.accessToken || null,
          Client_IP: ipRes || null,
        },
      }),
    });
=======
  try {
    const apiRes = await axios.post(url, req.body, {
      ...(config || {}),
      headers: {
        Authorization: jwt?.accessToken || null,
        Client_IP: ipRes || null,
      },
    });

>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    return res.status(200).json(apiRes.data);
  } catch (e) {
    console.log('API ERROR', e);
    const { response: fetchResponse } = e;

    if (fetchResponse?.status === 401) {
      if (fetchResponse?.data?.rtnCode === '9897') {
        req.session.destroy();
      } else {
        if (jwt) {
          const newJwt = await jwtRefresh(jwt);
          if (newJwt) {
            session.set('jwt', newJwt);
            jwt = newJwt;
          }
        }

        const apiRes = await axios.post(url, req.body, {
<<<<<<< HEAD
          ...(config || {
            headers: {
              Authorization: jwt?.accessToken || null,
              Client_IP: ipRes || null,
            },
          }),
        });
=======
          ...(config || {}),
          headers: {
            Authorization: jwt?.accessToken || null,
            Client_IP: ipRes || null,
          },
        });

>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        return res.status(200).json(apiRes.data);
      }
    }

    res.status(fetchResponse?.status || 500).json(fetchResponse?.data);
  }
});
