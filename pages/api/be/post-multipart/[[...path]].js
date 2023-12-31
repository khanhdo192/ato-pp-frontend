import axios from 'axios';
import withSession, { jwtRefresh } from '@/lib/session';

<<<<<<< HEAD
=======
export const config = {
  api: {
    bodyParser: false,
  },
};

>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
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
  try {
<<<<<<< HEAD
    const apiRes = await axios.post(url, req.body, {
=======
    const apiRes = await axios.post(url, req, {
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      headers: {
        Authorization: jwt?.accessToken,
        'content-type': req.headers['content-type'],
        Client_IP: ipRes || null,
      },
<<<<<<< HEAD
    });
    return res.status(200).json({ file: apiRes.data });
=======
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });
    return res.status(200).json(apiRes.data);
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
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

<<<<<<< HEAD
        const apiRes = await axios.post(url, req.body, {
=======
        const apiRes = await axios.post(url, req, {
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
          headers: {
            Authorization: jwt?.accessToken,
            'content-type': req.headers['content-type'],
            Client_IP: ipRes || null,
          },
<<<<<<< HEAD
        });
        return res.status(200).json({ file: apiRes.data });
=======
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
        });
        return res.status(200).json(apiRes.data);
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      }
    }

    res.status(fetchResponse?.status || 500).json(fetchResponse?.data);
  }
});
