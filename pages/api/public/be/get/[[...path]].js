import axios from 'axios';
import withSession from '@/lib/session';

export default withSession(async (req, res) => {
  const {
    query: { path },
  } = req;
  const url = process.env.NEXT_PUBLIC_API_URL + '/' + path.join('/');
  try {
    const { config } = req.body;
    delete req.body.config;

    const forwarded = req.headers['x-forwarded-for'];

    const ipRes = forwarded
      ? forwarded.split(/, /)[0]
      : req.connection.remoteAddress;

    const apiRes = await axios.get(url, req.body, {
      ...(config || {}),
      headers: {
        Client_IP: ipRes || null,
      },
    });

    return res.status(200).json(apiRes.data);
  } catch (e) {
    console.log('API ERROR', e);
    const { response: fetchResponse } = e;

    if (fetchResponse?.status === 401) {
      if (fetchResponse?.data?.rtnCode === '9897') {
        req.session.destroy();
      }
    }

    res.status(fetchResponse?.status || 500).json(fetchResponse?.data);
  }
});
