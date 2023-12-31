import axios from 'axios';
import withSession from '@/lib/session';

export default withSession(async (req, res) => {
  console.log('Request: /api/auth/sign-in');

  try {
<<<<<<< HEAD
    const url = `${process.env.NEXT_PUBLIC_API_URL}/tester/auth/operator/login`;
    const { userId, operatorId, password } = req.body;
=======
    const url = `${process.env.NEXT_PUBLIC_API_URL}/jcb/auth/login`;
    const { email, password } = req.body;
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710

    const forwarded = req.headers['x-forwarded-for'];

    const ipRes = forwarded
      ? forwarded.split(/, /)[0]
      : req.connection.remoteAddress;

    console.log('ipRes', ipRes);

    const loginRes = await axios.post(
      url,
<<<<<<< HEAD
      { userId, operatorId, password },
      { headers: { Client_IP: ipRes || null } }
=======
      {
        email: email,
        password: password,
      },
      {
        headers: {
          Client_IP: ipRes || null,
        },
      }
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    );

    if (loginRes?.data?.rtnCode === '1') {
      req.session.set('jwt', loginRes?.data?.result?.jwt);
      req.session.set('user', loginRes?.data?.result?.user);
      req.session.set('menus', loginRes?.data?.result?.menus);

      await req.session.save();
      return res.json({ isLoggedIn: true, ...loginRes?.data?.result?.user });
    }

    throw new Error(loginRes?.data?.message);
  } catch (error) {
<<<<<<< HEAD
    console.error('Request: /api/auth/sign-in - error response: ', error);
=======
    console.log('error', error);
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(fetchResponse?.data);
  }
});
