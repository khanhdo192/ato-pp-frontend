import Breadcrumb from '@/components/breadcrumb';
import BreadcrumbItem from '@/components/breadcrumbItem';
import Btn from '@/components/btn';
<<<<<<< HEAD
=======
import BtnUp from '@/components/btnUp';
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
import Container from '@/components/container';
import ContainerCol_2 from '@/components/containerCol_2';
import FeedbackMsg from '@/components/feedbackMsg';
import FormItemInput from '@/components/formItemInput';
<<<<<<< HEAD
import TransitionLayout from '@/components/layout/transition';
import TextH1 from '@/components/textH1';
import TextH4 from '@/components/textH4';
=======
import Header from '@/components/header';
import Nav from '@/components/nav';
import TextH1 from '@/components/textH1';
import TextH4 from '@/components/textH4';
import UserThumb from '@/components/userThumb';
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
import { postFetcher } from '@/lib/fetcher';
import useUser from '@/lib/useUser';
import { passwordIsValid } from '@/utils/validator';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

export default function Profile() {
<<<<<<< HEAD
  const { user } = useUser();
  const router = useRouter();
  const defaultFeedback = { isFeedback: false, message: '', type: '' };
  const defaultChangePassword = { password: '', confirmPassword: '' };
  const [feedback, setFeedback] = useState(defaultFeedback);
  const [changePassword, setChangePassword] = useState(defaultChangePassword);
  const [oldPassword, setOldPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

=======
  const { user } = useUser({ redirectTo: '/login' });
  const router = useRouter();
  const defaultFeedback = { isFeedback: false, message: '', type: '' };
  const defaultChangePassword = { password: '', confirmPassword: '' };

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [feedback, setFeedback] = useState(defaultFeedback);
  const [changePassword, setChangePassword] = useState(defaultChangePassword);
  const [submitted, setSubmitted] = useState(false);
  const [oldPassword, setOldPassword] = useState('');

  const handleOldPassword = useCallback(value => {
    setOldPassword(value);
  }, []);

  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  const handleFeedback = feedback =>
    window.scrollTo(0, 0) & setFeedback(feedback);
  const handleChangePassword = (id, value) =>
    setChangePassword({ ...changePassword, [id]: value });

<<<<<<< HEAD
  const handleOldPassword = useCallback(value => {
    setOldPassword(value);
  }, []);

=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  const handlePasswordChange = async e => {
    try {
      e.preventDefault();
      setSubmitted(true);

      const body = {
<<<<<<< HEAD
        userId: user ? user?.userIdHash : '',
        operatorId: user ? user?.operatorOpId : '',
        oldPassword,
        ...changePassword,
      };

      const passwordChangeRes = await postFetcher(body)(
        '/tester/auth/password/renew'
      );

      if (passwordChangeRes.rtnCode !== '1') {
        return handleFeedback({
=======
        email: user?.email,
        ...changePassword,
        oldPassword,
      };

      const passwordChangeRes = await postFetcher(body)(
        '/jcb/auth/password/renew'
      );

      if (passwordChangeRes.rtnCode !== '1') {
        handleFeedback({
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
          isFeedback: true,
          message: passwordChangeRes?.message,
          type: 'error',
        });
      } else {
        handleFeedback({
          isFeedback: true,
          message: 'Your password has been successfully updated!',
          type: 'success',
        });
      }
    } catch (error) {
      if (error?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
      handleFeedback({
        isFeedback: true,
        message: error?.response?.data?.message || '',
        type: 'error',
      });
    } finally {
      setOldPassword('');
      setChangePassword(defaultChangePassword);
      setSubmitted(false);
      setTimeout(() => setFeedback(defaultFeedback), 5000);
    }
  };

  return (
<<<<<<< HEAD
    <TransitionLayout
      activeSection="home"
      headerChildren={
        <Breadcrumb>
          <BreadcrumbItem isFirst label="dashboard" link="/dashboard" />
          <BreadcrumbItem label="profile" />
        </Breadcrumb>
      }
    >
      <section>
        <div className="w-full">
          {feedback.isFeedback ? (
            <Container>
              <FeedbackMsg type={feedback.type} text={feedback.message} />
            </Container>
          ) : null}
        </div>
        <Container>
          <TextH1 text="Hello" highliteText={!!user ? user?.fullName : ''} />
          <ContainerCol_2>
            <Container hasBorder xtra="mb-6 lg:mb-0">
              <TextH4 text="User Information" />
              <FormItemInput
                type="text"
                label="Name"
                value={user && user?.fullName}
                isDisabled
              />
              <FormItemInput
                type="text"
                label="Email"
                placeholder="Email"
                value={user && user?.email}
                isDisabled
              />
            </Container>
            <Container hasBorder>
              <TextH4 text="Change Password" />
              <form onSubmit={e => handlePasswordChange(e)}>
                <FormItemInput
                  id="userId"
                  value={user && user?.userIdHash}
                  type="text"
                  label="User ID"
                  placeholder="Enter User ID"
                  isRequired
                  isDisabled
                />
                <FormItemInput
                  id="operatorId"
                  value={user && user?.operatorOpId}
                  type="text"
                  label="Operator ID"
                  placeholder="Enter Operator ID"
                  isRequired
                  isDisabled
                />
                <FormItemInput
                  id="oldPassword"
                  value={oldPassword}
                  type="password"
                  label="Current Password"
                  placeholder="Enter Current Password"
                  onChange={e => handleOldPassword(e.target.value)}
                  isRequired
                />
                <FormItemInput
                  id="password"
                  value={changePassword['password']}
                  type="password"
                  label="New Password"
                  placeholder="Enter New Password"
                  onChange={e =>
                    handleChangePassword(e.target.id, e.target.value)
                  }
                  error={
                    !changePassword['password']
                      ? false
                      : !passwordIsValid(changePassword['password'])
                  }
                  errorMsg={
                    !changePassword['password']
                      ? ''
                      : !passwordIsValid(changePassword['password'])
                      ? 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one special character.'
                      : ''
                  }
                  isRequired
                  autoComplete="new-password"
                />
                <FormItemInput
                  id="confirmPassword"
                  value={changePassword['confirmPassword']}
                  type="password"
                  label="Confirm New Password"
                  placeholder="Confirm New Password"
                  onChange={e =>
                    handleChangePassword(e.target.id, e.target.value)
                  }
                  error={
                    !changePassword['confirmPassword']
                      ? false
                      : !passwordIsValid(changePassword['confirmPassword'])
                  }
                  errorMsg={
                    !changePassword['confirmPassword']
                      ? ''
                      : !passwordIsValid(changePassword['confirmPassword'])
                      ? 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one special character.'
                      : ''
                  }
                  isRequired
                />
                <Btn
                  label="Change password"
                  secondary
                  type="submit"
                  ico={submitted ? 'spinner' : 'submit'}
                  isDisable={
                    !passwordIsValid(changePassword['password']) ||
                    !passwordIsValid(changePassword['confirmPassword']) ||
                    changePassword['password'] !==
                      changePassword['confirmPassword'] ||
                    !oldPassword ||
                    submitted
                  }
                />
              </form>
            </Container>
          </ContainerCol_2>
        </Container>
      </section>
    </TransitionLayout>
=======
    <main className="relative flex w-full min-h-screen 2xl:min-h-main m-auto max-w-1688 2xl:my-8 2xl:pl-8">
      <Nav
        status={isSideBarOpen}
        setStatus={setIsSideBarOpen}
        activeSection={'home'}
      />
      <div className="relative z-0 w-full p-2 lg:pt-2 lg:ml-menu-lg 2xl:ml-menu py:0 lg:px-8">
        <Header setStatus={setIsSideBarOpen}>
          <Breadcrumb>
            <BreadcrumbItem isFirst label="Dashboard" link="/dashboard" />
            <BreadcrumbItem label="Profile" />
          </Breadcrumb>
          <UserThumb alt={!!user ? user?.fullName : ''} />
        </Header>
        <div className="w-full p-2 lg:py:0 lg:px-8">
          <section>
            {feedback.isFeedback ? (
              <Container>
                <FeedbackMsg type={feedback.type} text={feedback.message} />
              </Container>
            ) : null}
            <Container>
              <TextH1
                text="Hello"
                highliteText={!!user ? user?.fullName : ''}
              />
              <ContainerCol_2>
                <Container hasBorder xtra="mb-6 lg:mb-0">
                  <TextH4 text="User Information" />
                  <FormItemInput
                    type="text"
                    label="Name"
                    value={user && user?.fullName}
                    isDisabled
                  />
                  <FormItemInput
                    type="text"
                    label="Email"
                    placeholder="Email"
                    value={user && user?.email}
                    isDisabled
                  />
                </Container>
                <Container hasBorder>
                  <TextH4 text="Change Password" />
                  <form onSubmit={e => handlePasswordChange(e)}>
                    <FormItemInput
                      id="oldPassword"
                      value={oldPassword}
                      type="password"
                      label="Current Password"
                      placeholder="Enter Current Password"
                      onChange={e => handleOldPassword(e.target.value)}
                      isRequired
                    />
                    <FormItemInput
                      id="password"
                      value={changePassword['password']}
                      type="password"
                      label="New Password"
                      placeholder="Enter New Password"
                      onChange={e =>
                        handleChangePassword(e.target.id, e.target.value)
                      }
                      error={
                        !changePassword['password']
                          ? false
                          : !passwordIsValid(changePassword['password'])
                      }
                      errorMsg={
                        !changePassword['password']
                          ? ''
                          : !passwordIsValid(changePassword['password'])
                          ? 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one special character'
                          : ''
                      }
                      isRequired
                    />
                    <FormItemInput
                      id="confirmPassword"
                      value={changePassword['confirmPassword']}
                      type="password"
                      label="Confirm New Password"
                      placeholder="Confirm New Password"
                      onChange={e =>
                        handleChangePassword(e.target.id, e.target.value)
                      }
                      error={
                        !changePassword['confirmPassword']
                          ? false
                          : !passwordIsValid(changePassword['confirmPassword'])
                      }
                      errorMsg={
                        !changePassword['confirmPassword']
                          ? ''
                          : !passwordIsValid(changePassword['confirmPassword'])
                          ? 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one special character'
                          : changePassword['password'] !==
                            changePassword['confirmPassword']
                          ? 'Password do not match'
                          : ''
                      }
                      isRequired
                    />
                    <Btn
                      label="Change password"
                      secondary
                      type="submit"
                      ico={submitted ? 'spinner' : 'submit'}
                      isDisable={
                        !passwordIsValid(changePassword['password']) ||
                        !passwordIsValid(changePassword['confirmPassword']) ||
                        changePassword['password'] !==
                          changePassword['confirmPassword'] ||
                        !oldPassword ||
                        submitted
                      }
                    />
                  </form>
                </Container>
              </ContainerCol_2>
            </Container>
          </section>
          <BtnUp />
        </div>
      </div>
    </main>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  );
}
