<<<<<<< HEAD
import Container from '@/components/container';
import Divider from '@/components/divider';
import FormItemInput from '@/components/formItemInput';
import { IcoAddUser } from '@/components/icons';
import TransitionLayout from '@/components/layout/transition';
import Spinner from '@/components/spinner';
import UserManagementModal from '@/components/userManagementModal';
import { deleteFetcher, fetcher, postFetcher } from '@/lib/fetcher';
import useUser from '@/lib/useUser';
import { emailIsValid, passwordIsValid } from '@/utils/validator';
import { every, isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';

export default function UserManagementPage() {
  const { user } = useUser();
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [newUser, setNewUser] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [editingUser, setEditingUser] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isAllowEdit, setIsAllowEdit] = useState(true);

  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [fetching, setFetching] = useState(false);
  const urlToGetUsers = !!user
    ? `/tester/auth/users/${user?.companyId || ''}`
    : null;

  const {
    data: dataUsers,
    error: errorUsers,
    mutate: mutateUsers,
  } = useSWR(urlToGetUsers, fetcher);

  useEffect(() => {
    if (user?.userRoleId === 6) {
      setIsAllowEdit(false);
    }
  }, [user]);

  const roleName = useCallback(roleId => {
    switch (roleId?.toString()) {
      case '0':
        return 'Admin';
      case '1':
        return 'TPP Manager';
      case '2':
        return 'Implementation Manager';
      case '3':
        return 'TPP';
      case '4':
        return 'Implementation';
      case '5':
        return 'Admin';
      case '6':
        return 'Non-Admin';

      default:
        return '-';
    }
  }, []);

  useMemo(() => {
    if (dataUsers?.result) {
      let users = !!dataUsers.result.userList ? dataUsers.result.userList : [];
      setUsers(!!users ? users : []);
      setSelectedUser(null);
    }
    if (errorUsers) {
      if (errorUsers?.response?.data?.rtnCode === '9897') {
        router.reload();
      }
      setUsers([]);
    }
  }, [dataUsers, errorUsers]);

  const addUser = async e => {
    e.preventDefault();
    setFetching(true);
    try {
      const { fullName, password, email, title, dept } = newUser;
      if (!fullName || !password || !email) {
        setErrorMsg('Please complete the required fields.');
        setTimeout(() => {
          setErrorMsg('');
          setFetching(false);
        }, 2000);
        return;
      } else if (!emailIsValid(email)) {
        setErrorMsg('Invalid email.');
        setTimeout(() => {
          setErrorMsg('');
          setFetching(false);
        }, 2000);
        return;
      } else if (!passwordIsValid(password)) {
        setErrorMsg(
          'Password required minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 special character.'
        );
        setTimeout(() => {
          setErrorMsg('');
          setFetching(false);
        }, 2000);
        return;
      }
      const { companyName, component, protocol_version } = user;
      const body = {
        fullName,
        password,
        email,
        title,
        dept,
        companyName,
        component,
        protocol_version,
        userRoleId: 6,
      };

      const res = await postFetcher(body)('/tester/auth/users/create');
      const newUserToTable = res?.result?.users;
      newUserToTable.userRoleId = roleName(newUserToTable.userRoleId);
      let newUsers = [...users.filter(user => !!user.id), newUserToTable];
      newUsers = !!newUsers ? newUsers : [];
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
      setErrorMsg('Error when triying to add user. Please try again.');
      setTimeout(() => {
        setErrorMsg('');
      }, 2000);
    }
    setFetching(false);
  };

  const editNewUser = (name, value) => {
    newUser[name] = value;
    setNewUser(newUser);
  };

  const selectUser = user => {
    setSelectedUser(user);
    setNewName(user.fullName);
    setNewEmail(user.email);
  };

  const editUser = () => {
    setEditingUser(true);
  };

  const editUserFetch = async () => {
    const userId = selectedUser.userId;
    if (!emailIsValid(newEmail)) {
      setErrorMsg('Email invalid.');
      setTimeout(() => {
        setErrorMsg('');
      }, 2000);
      return;
    }
    try {
      const res = await postFetcher({
        userId,
        fullName: newName,
        email: newEmail,
      })(`/tester/auth/users/${userId}`);
      if (res.rtnCode == '1') {
        setSelectedUser(null);
        mutateUsers();
        setEditingUser(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
      setErrorMsg('Error when triying to update the user. Please try again.');
      setTimeout(() => {
        setErrorMsg('');
      }, 2000);
    }
  };

  const deleteUser = async () => {
    const role = selectedUser?.userRoleId;
    const userId = selectedUser?.userId;
    if (role != 'Admin') {
      try {
        const res = await deleteFetcher(`/tester/auth/users/${userId}`);
        if (res.rtnCode == '1') {
          mutateUsers();
        } else {
          throw new Error();
        }
      } catch (error) {
        console.log(error);
        if (error?.response?.data?.rtnCode === '9897') {
          router.push('/login');
        }
        setErrorMsg('Error when triying to delete user. Please try again.');
        setTimeout(() => {
          setErrorMsg('');
        }, 2000);
      }
    } else {
      setErrorMsg("Users with Admin role can't be deleted.");
      setTimeout(() => {
        setErrorMsg('');
      }, 2000);
    }
    setShowDeleteConfirmationModal(false);
  };

  const saveNewName = value => {
    setNewName(value);
  };

  const saveNewEmail = value => {
    setNewEmail(value);
  };

  const fakeRows = useCallback(
    amount => {
      return Array.from({ length: amount }).map((_, index) => (
        <tr
          key={`rows-${index}`}
          className={index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}
        >
          <th className="border-r border-gray-400 py-5"></th>
          <th className="border-r border-gray-400"></th>
          <th className="border-r border-gray-400"></th>
          <th className=""></th>
        </tr>
      ));
    },
    [users]
  );

  return (
    <>
      <TransitionLayout
        activeSection="user-management"
        headerChildren={
          <h1 className="text-gr-400 md:text-2xl text-xl font-medium tracking-wide">
            User Management
          </h1>
        }
      >
        <section>
          <Container>
            <div className="flex flex-col lg:flex-row justify-between lg:mb-6">
              <div className="flex items-center justify-between flex-auto">
                <FormItemInput
                  label="Full Name*"
                  type="text"
                  placeholder="Enter Name"
                  isDisabled={!isAllowEdit}
                  onChange={e => editNewUser('fullName', e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between flex-auto">
                <FormItemInput
                  label="Email*"
                  type="email"
                  placeholder="Enter Email"
                  isDisabled={!isAllowEdit}
                  onChange={e => editNewUser('email', e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between flex-auto">
                <FormItemInput
                  label="Password*"
                  type="password"
                  placeholder="********"
                  isDisabled={!isAllowEdit}
                  onChange={e => editNewUser('password', e.target.value)}
                  autoComplete="new-password"
                />
              </div>
            </div>
            {isAllowEdit && (
              <div className="flex items-center justify-end mb-8">
                <button
                  className={`${
                    fetching ? 'bg-gray-400' : 'bg-blue-500'
                  }  rounded-lg px-10 py-2 text-white`}
                  disabled={fetching}
                  onClick={e => addUser(e)}
                >
                  <div className="flex">
                    {fetching ? (
                      <Spinner isLoading />
                    ) : (
                      <>
                        <IcoAddUser
                          style={{ fill: 'rgb(255 255 255)' }}
                          className="mr-3"
                        />
                        Add User
                      </>
                    )}
                  </div>
                </button>
              </div>
            )}
            <Divider />
            <h1 className="font-semibold text-xl mb-4"> User List </h1>
            {!!errorMsg && (
              <div className="bg-red-300 py-3 rounded-lg border border-red-500 mb-4">
                <p className="text-center font-normal text-lg">{errorMsg}</p>
              </div>
            )}
            <div
              className="overflow-auto w-full mb-8"
              style={{ maxHeight: '400px' }}
            >
              <table
                className="table-auto w-full"
                style={{ minWidth: '500px' }}
              >
                <thead className="bg-blue-900 text-white sticky top-0">
                  <tr>
                    <th className="py-1 px-2 border-r border-white">
                      Full Name
                    </th>
                    <th className="py-1 px-2 border-r border-white">User ID</th>
                    <th className="py-1 px-2 border-r border-white">Role</th>
                    <th className="py-1 px-2">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((userItem, index) => (
                    <tr
                      className={`${
                        !!userItem.id && userItem == selectedUser
                          ? 'bg-blue-200'
                          : index % 2 == 0
                          ? 'bg-gray-50'
                          : 'bg-gray-100'
                      }`}
                      key={`user-${index}`}
                    >
                      {!!userItem.id &&
                      userItem == selectedUser &&
                      editingUser ? (
                        <th
                          className={`font-normal border-r border-gray-400 px-2`}
                        >
                          <input
                            className="bg-blue-200 w-full py-2 text-gray-700 text-center"
                            onChange={e => saveNewName(e.target.value)}
                            defaultValue={userItem.fullName}
                          />
                        </th>
                      ) : (
                        <th
                          onClick={
                            !!userItem.id ? () => selectUser(userItem) : ''
                          }
                          className={`${
                            !!userItem.id ? 'cursor-pointer' : 'cursor-default'
                          } font-normal border-r border-gray-400 py-2 w-1/3 px-2`}
                        >
                          {userItem.fullName}
                        </th>
                      )}

                      <th
                        onClick={
                          !!userItem.id ? () => selectUser(userItem) : ''
                        }
                        className={`${
                          !!userItem.id ? 'cursor-pointer' : 'cursor-default'
                        } font-normal border-r border-gray-400 py-2 px-2`}
                      >
                        {userItem.userId}
                      </th>
                      <th
                        onClick={
                          !!userItem.id ? () => selectUser(userItem) : ''
                        }
                        className={`${
                          !!userItem.id ? 'cursor-pointer' : 'cursor-default'
                        } font-normal border-r border-gray-400 py-2 px-2`}
                      >
                        {roleName(userItem.userRoleId)}
                      </th>
                      {!!userItem.id &&
                      userItem == selectedUser &&
                      editingUser ? (
                        <th className={`font-normal`}>
                          <input
                            disabled={
                              !!(
                                userItem.userId === user.userIdHash &&
                                user.userRoleId === 5
                              )
                            }
                            className="bg-blue-200 w-full py-2 text-gray-700 text-center"
                            onChange={e => saveNewEmail(e.target.value)}
                            defaultValue={userItem.email}
                          />
                        </th>
                      ) : (
                        <th
                          onClick={!!user?.id ? () => selectUser(userItem) : ''}
                          className={`${
                            !!userItem.id ? 'cursor-pointer' : 'cursor-default'
                          } font-normal py-2 w-1/3`}
                        >
                          {userItem.email}
                        </th>
                      )}
                    </tr>
                  ))}
                  {users.length % 2 !== 0 && (
                    <tr className="bg-gray-100">
                      <th className="border-r border-gray-400 py-5"></th>
                      <th className="border-r border-gray-400"></th>
                      <th className="border-r border-gray-400"></th>
                      <th className=""></th>
                    </tr>
                  )}
                  {users.length < 10 && fakeRows(7)}
                </tbody>
              </table>
            </div>
            {!every(selectedUser, isEmpty) && isAllowEdit && (
              <div className="flex justify-between mt-5">
                <div>
                  {editingUser ? (
                    <div>
                      <button
                        onClick={() => setEditingUser(false)}
                        className="px-10 py-1.5 rounded-lg bg-gray-400 text-white mr-7"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => editUserFetch()}
                        className="px-10 py-1.5 rounded-lg bg-blue-500 text-white"
                      >
                        Submit
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => editUser()}
                      className="px-10 py-1.5 rounded-lg bg-blue-500 text-white"
                    >
                      Edit
                    </button>
                  )}
                </div>
                {!every(selectedUser, isEmpty) &&
                  selectedUser.userId !== user?.userIdHash &&
                  user?.userRoleId === 5 && (
                    <div>
                      <button
                        onClick={() => setShowDeleteConfirmationModal(true)}
                        className="px-10 py-1.5 rounded-lg bg-red-500 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  )}
              </div>
            )}
          </Container>
        </section>
      </TransitionLayout>
      <UserManagementModal
        isOpen={showDeleteConfirmationModal}
        closeModal={() => setShowDeleteConfirmationModal(false)}
        deleteUser={deleteUser}
      />
    </>
=======
import React, { useState } from 'react';
import Nav from '@/components/nav';
import Header from '@/components/header';
import UserThumb from '@/components/userThumb';
import Footer from '@/components/footer';
import BtnUp from '@/components/btnUp';
import Breadcrumb from '@/components/breadcrumb';
import BreadcrumbItem from '@/components/breadcrumbItem';
import Container from '@/components/container';
import StaffAccounts from '@/components/staffAccounts';
import TesterAccounts from '@/components/testerAccounts';
import UserRoles from '@/components/userRoles';

export default function UserManagementPage({ user }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <main className="relative flex w-full min-h-screen 2xl:min-h-main m-auto max-w-1688 2xl:my-8 2xl:pl-8">
      <Nav
        status={isSideBarOpen}
        setStatus={setIsSideBarOpen}
        activeSection={'user-management'}
      />
      <div className="relative z-0 w-full p-2 lg:pt-2 lg:ml-menu-lg 2xl:ml-menu py:0 lg:px-8">
        <Header setStatus={setIsSideBarOpen}>
          <Breadcrumb>
            <BreadcrumbItem
              isFirst
              label="dashboard"
              link="/dashboard"
              fontSize="text-base"
            />
            <BreadcrumbItem label="user management" fontSize="text-base" />
          </Breadcrumb>
          <UserThumb alt={!!user ? user.fullName : ''} />
        </Header>
        <section>
          <Container>
            <UserRoles user={user} />
          </Container>
          {user && user.userRoleId === 0 && (
            <div>
              <Container>
                <StaffAccounts user={user} />
              </Container>
            </div>
          )}
          {user &&
            (user.userRoleId === 0 ||
              user.userRoleId === 1 ||
              user.userRoleId === 2) && (
              <Container>
                <TesterAccounts user={user} />
              </Container>
            )}
        </section>
        <Footer />
        <BtnUp />
      </div>
    </main>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  );
}
