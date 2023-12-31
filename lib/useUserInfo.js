import { fetcher } from '@/lib/fetcher';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

export default function useUserInfo(userId) {
  const router = useRouter();
  const urlGetUserDetail = !!userId
    ? `/tester/auth/users/detail/${userId || ''}`
    : null;

  const { data: dataUsers, error } = useSWR(urlGetUserDetail, fetcher, {
    revalidateOnFocus: true,
  });

  useEffect(() => {
    if (error) {
      localStorage.setItem('isIdle', false);
      if (error?.response?.data?.rtnCode === '9897') {
        router.reload();
      }
    }
  }, [error]);

  const userInfo = dataUsers?.result?.user;

  const handleLogout = async () => {
    await fetcher(`${process.env.NEXT_PUBLIC_HOST}/api/auth/sign-out`)
      .then(() => {
        router.push('/login');
      })
      .catch(error => {
        if (error?.response?.data?.rtnCode === '9897') {
          router.reload();
        }
      });
  };

  if (userInfo?.operatorStatus === 204) {
    return handleLogout();
  }

  return { userInfo };
}
