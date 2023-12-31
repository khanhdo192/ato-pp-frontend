import axios from 'axios';

const ROUTES_WITHOUT_API_BE = [
  `${process.env.NEXT_PUBLIC_HOST}/api/auth/sign-in`,
  `${process.env.NEXT_PUBLIC_HOST}/api/auth/sign-out`,
  `${process.env.NEXT_PUBLIC_HOST}/api/user`,
  `${process.env.NEXT_PUBLIC_HOST}/api/user/update`,
<<<<<<< HEAD
=======
  `${process.env.NEXT_PUBLIC_HOST}/api/auth/reset`,
  `${process.env.NEXT_PUBLIC_HOST}/api/auth/password-change`,
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  '/api/auth/sign-in',
  '/api/auth/sign-out',
  '/api/user',
  '/api/user/update',
<<<<<<< HEAD
];

const ROUTES_WITHOUT_LOGGED_USER = [
  '/tester/auth/send-verify-code',
  '/tester/auth/signup',
  '/tester/auth/verify-email',
  '/tester/auth/resend-verify-email',
  '/tester/auth/get-user-register-fields',
  '/tester/auth/update-user-register-form',
  '/tester/auth/reset',
  '/tester/auth/password/change',
  '/tester/auth/get-user-fields',
  '/tester/auth/update-user-form',
];

const postMultipartUrlBuilder = url =>
  ROUTES_WITHOUT_API_BE.includes(url) ? url : '/api/be/post-multipart' + url;
const postUrlBuilder = url =>
  ROUTES_WITHOUT_API_BE.includes(url)
    ? url
    : ROUTES_WITHOUT_LOGGED_USER.includes(url)
    ? '/api/public/be/post' + url
    : '/api/be/post' + url;
const getUrlBuilder = url =>
  ROUTES_WITHOUT_API_BE.includes(url)
    ? url
    : ROUTES_WITHOUT_LOGGED_USER.includes(url)
    ? '/api/public/be/get' + url
    : '/api/be/get' + url;

const deleteUrlBuilder = url =>
  ROUTES_WITHOUT_API_BE.includes(url) ? url : '/api/be/delete' + url;

export const getFetcher = url =>
  axios.get(getUrlBuilder(url)).then(res => res.data);
export const fetcher = getFetcher;
export const postFetcher =
  (body, config = null) =>
  url =>
    axios.post(postUrlBuilder(url), { ...body, config }).then(res => res.data);
export const postMultipartFetcher = body => url =>
  axios.post(postMultipartUrlBuilder(url), body).then(res => res.data);

export const deleteFetcher = url =>
  axios.delete(deleteUrlBuilder(url)).then(res => res.data);

// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     console.log('error', error.response.status);
//     console.log('message', error?.response?.data?.rtnCode);
//     if (error.response.status === 401) {
//       localStorage.setItem('isIdle', false);
//       // window.location.replace('/login');
=======
  '/api/auth/reset',
  '/api/auth/password-change',
];

const postUrlBuilder = url =>
  ROUTES_WITHOUT_API_BE.includes(url) ? url : '/api/be/post' + url;
const getUrlBuilder = url =>
  ROUTES_WITHOUT_API_BE.includes(url) ? url : '/api/be/get' + url;
const postMultipartUrlBuilder = url =>
  ROUTES_WITHOUT_API_BE.includes(url) ? url : '/api/be/post-multipart' + url;
export const getFetcher = url =>
  axios.get(getUrlBuilder(url)).then(res => res.data);
export const fetcher = getFetcher;

export const postMultipartFetcher = body => url =>
  axios.post(postMultipartUrlBuilder(url), body).then(res => res.data);
export const postFetcher =
  (body, config = null) =>
  url =>
    axios.post(postUrlBuilder(url), { ...body, config }).then(res => res.data);
export const postFetcherWithoutConfig = body => url =>
  axios.post(postUrlBuilder(url), body).then(res => res.data);

// axios.interceptors.response.use(
//   res => res,
//   function (error) {
//     console.log('error :>> ', error.response.status);
//     if (error.response.status === 401) {
//       localStorage.setItem('isIdle', false);
//       window.location.replace('/login');
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
//     } else if (error.response.status === 500) {
//       localStorage.setItem('isIdle', false);
//       // window.location.reload();
//     } else {
//       throw error;
//     }
//   }
// );
