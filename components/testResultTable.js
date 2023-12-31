import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { CSVLink } from 'react-csv';
import omit from 'lodash/omit';

import TestResultTableTr from './testResultTableTr';
import { IcoArwSort } from '@/components/icons';
import { postFetcher } from '@/lib/fetcher';
import ModalConfimationTestReport from './modalConfimationTestReport';
import useUser from '@/lib/useUser';
import moment from 'moment';
import { useRouter } from 'next/router';

// Fot complete the table with null data
const nullData = [
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: '',
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: '',
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: '',
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: '',
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
  {
    id: null,
    testCaseId: null,
    protocol: null,
    runTime: null,
    channel: null,
    category: null,
    result: 'Null Data',
    waiverTesterComment: 'Null Data',
    waiverJcbComment: null,
  },
];

const getDate = createdTime => {
  return createdTime ? new Date(createdTime).toISOString().split('T')[0] : '';
};

export default function TestResultTable({
  currentStep,
  setCurrentStep,
  product,
  closeModal,
  setStatusId,
}) {
  const { user } = useUser();
  const router = useRouter();
  const [tests, setTests] = useState(nullData);
  const [editing, setEditing] = useState(false);
  const [sortedBy, setSortedBy] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [testReportId, setTestReportId] = useState(null);
  const [testsPassed, setTestsPassed] = useState(0);
  const [testsFailed, setTestsFailed] = useState(0);
  const [testsExecuted, setTestsExecuted] = useState(0);
  const [testsApplicable, setTestsApplicable] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [fetching, setFetching] = useState(false);

  const operatorId = user?.operatorOpId || '';
  const protocolVersion = user?.protocol_version || '';
  const approvalDate = user?.approvalDate || '';
=======
import TestResultTableTr from './testResultTableTr';
import { IcoArwSort } from '@/components/icons';
import { postFetcher } from '@/lib/fetcher';
import { CSVLink } from 'react-csv';
import omit from 'lodash/omit';
import moment from 'moment';
import Spinner from './spinner';
import { useRouter } from 'next/router';
import { getDate } from '@/utils/calculate';

export default function TestResultTable({
  user,
  testResults,
  nullData,
  testReportId,
  testsPassed,
  testsFailed,
  testsExecuted,
  testsApplicable,
  canEdit,
  id,
  info,
}) {
  const router = useRouter();
  const [tests, setTests] = useState([]);
  const [editing, setEditing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortedBy, setSortedBy] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const [editedNow, setEditedNow] = useState(false);
  const operatorId = info?.operatorId || '';
  const protocolVersion = info?.product?.protocolVersion || '';
  const approvalDate =
    info?.resultsReviewStage?.resultsReviewStage?.verdictCode === 3
      ? info?.resultsReviewStage?.resultsReviewStage?.modifyDate
      : '';
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710

  useEffect(() => {
    setIsSorted(false);
  }, [isSorted]);

  useEffect(() => {
<<<<<<< HEAD
    if (currentStep == 3 || currentStep == 4) {
      async function generateReports() {
        try {
          const res = await postFetcher({})(
            `/tester/products/tc/generateTestResult/${product}`
          );
          const testList = res?.result?.data?.testReportDetailList;
          const testReportId = res?.result?.data?.testReportId;
          let testsFailed = 0;
          let testsPassed = 0;
          let testsExecuted = 0;
          let testsApplicable = 0;
          if (!!testList) {
            testList.forEach(test => {
              if (test.result == 1) {
                testsPassed += 1;
              } else {
                testsFailed += 1;
              }
            });
            testsExecuted = testList.filter(
              test => test?.result !== null
            ).length;
            testsApplicable = testList.length;
          }
          setTestsExecuted(testsExecuted);
          setTestsApplicable(testsApplicable);
          setTestsPassed(testsPassed);
          setTestsFailed(testsFailed);
          setTestReportId(testReportId);
          setTests(
            !!testList
              ? testList.length < 15
                ? testList.concat(nullData)
                : testList
              : []
          );
        } catch (error) {
          console.log(error);
          if (error?.response?.data?.rtnCode === '9897') {
            router.push('/login');
          }
          setTests([]);
        }
      }
      generateReports();
    }
  }, [currentStep]);

  const sortTest = value => {
    let testsSorted = [];
    if (sortedBy === value) testsSorted = tests.reverse();
=======
    setTests(
      !!testResults
        ? testResults.sort((a, b) =>
            a.testCaseId < b.testCaseId
              ? -1
              : a.testCaseId > b.testCaseId
              ? 1
              : 0
          )
        : []
    );
  }, [testResults]);

  const changeResult = async e => {
    e.preventDefault();
    try {
      setSubmitted(true);
      setIsLoading(true);
      const sendTest = tests.filter(test => !!test.testReportDetailId);
      const testReportStatusSubmittedCode = 2;

      await postFetcher({
        productId: id,
        testReportId,
        status: testReportStatusSubmittedCode,
        testReportDetailList: sendTest,
      })('/tester/products/tc/generateTestResult/update-test-result');
      setSubmitted(false);
      setEditing(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
      setIsLoading(false);
    }
  };

  const sortTest = value => {
    let testsSorted = [];
    const testsWithoutNullData = tests.filter(test => !!test.testCaseId);
    if (sortedBy === value) testsSorted = testsWithoutNullData.reverse();
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    else {
      setSortedBy(value);
      if (
        value == 'testCaseId' ||
        value == 'protocol' ||
        value == 'channel' ||
        value == 'category'
      ) {
<<<<<<< HEAD
        testsSorted = tests.sort((a, b) =>
          a[value] > b[value] ? -1 : a[value] < b[value] ? 1 : 0
        );
      } else if (value == 'runTime') {
        testsSorted = tests.sort((a, b) =>
          getDate(a.runTime) >= getDate(b.runTime)
            ? 1
            : getDate(a.runTime) <= getDate(b.runTime)
=======
        testsSorted = testsWithoutNullData.sort((a, b) =>
          a[value] > b[value] ? -1 : a[value] < b[value] ? 1 : 0
        );
      } else if (value == 'time') {
        testsSorted = testsWithoutNullData.sort((a, b) =>
          getDate(a.time) >= getDate(b.time)
            ? 1
            : getDate(a.time) <= getDate(b.time)
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
            ? -1
            : 0
        );
      } else if (value == 'result') {
<<<<<<< HEAD
        testsSorted = tests.sort((a, b) => {
=======
        testsSorted = testsWithoutNullData.sort((a, b) => {
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
          if (a.result == 0 && (b.result == 1 || b.result == null)) return -1;
          if (b.result == 0 && (a.result == 1 || a.result == null)) return 1;
          return 0;
        });
      }
    }
<<<<<<< HEAD
    setTests(testsSorted);
    setIsSorted(true);
  };

  const editTesterComments = (testReportDetailId, value) => {
    const newTests = tests.map(test => {
      if (test.testReportDetailId == testReportDetailId) {
        test.waiverTesterComment = value;
=======
    setTests(testsSorted.concat(nullData));
    setIsSorted(true);
  };

  const edit = (testCaseId, name, value) => {
    const newTests = tests.map(test => {
      if (test.testCaseId == testCaseId) {
        test[name] = value;
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      }
      return test;
    });
    setTests(newTests);
  };

<<<<<<< HEAD
  const openModal = e => {
    e.preventDefault();
    setEditing(false);
    setShowModal(true);
  };

  const generateReports = async () => {
    try {
      const res = await postFetcher({})(
        `/tester/products/tc/generateTestResult/${product}`
      );
      const testList = res?.result?.data?.testReportDetailList;
      if (!testList) {
        setErrorMsg('Test report is empty');
        setTimeout(() => {
          setErrorMsg('');
        }, 5000);
        return;
      }
      const testReportId = res?.result?.data?.testReportId;
      let testsFailed = 0;
      let testsPassed = 0;
      let testsExecuted = 0;
      let testsApplicable = 0;
      if (!!testList) {
        testList.forEach(test => {
          if (test.result == 1) {
            testsPassed += 1;
          } else if (test.result == 0) {
            testsFailed += 1;
          }
        });
        testsExecuted = testList.filter(test => test?.result !== null).length;
        testsApplicable = testList.length;
      }
      setTestsExecuted(testsExecuted);
      setTestsApplicable(testsApplicable);
      setTestsPassed(testsPassed);
      setTestsFailed(testsFailed);
      setTestReportId(testReportId);
      setTests(
        !!testList
          ? testList.length < 15
            ? testList.concat(nullData)
            : testList
          : nullData
      );
      setCurrentStep(2);
      setEditing(true);
    } catch (error) {
      console.error(error);
      if (error?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
      setErrorMsg('Something went wrong while trying to get the test report');
      setTimeout(() => {
        setErrorMsg('');
      }, 5000);
      setTests(nullData);
    }
  };

  const submitReport = async e => {
    e.preventDefault();
    try {
      setFetching(true);
      const sendTest = tests.filter(test => !!test.testReportDetailId);
      const testReportStatusSubmittedCode = 2;
      await postFetcher({
        productId: product,
        testReportId,
        status: testReportStatusSubmittedCode,
        testReportDetailList: sendTest,
      })('/tester/products/tc/generateTestResult/update-test-result');
      setCurrentStep(3);
      setStatusId(3);
      setFetching(false);
      setShowModal(false);
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
    }
  };

  return (
    <div className="">
      <h1 className="text-xl mb-3 font-semibold tracking-wide">Test Results</h1>
      <div className="overflow-auto" style={{ maxHeight: '35vh' }}>
        <table className="table-auto w-full rounded-xl">
          <thead className="sticky top-0" style={{ zIndex: '5' }}>
            <tr className="bg-blue-900">
              <th
                className={`${
                  !editing ? '' : 'bg-opacity-75'
                } text-white border-r border-white text-sm`}
                style={{ width: '11%' }}
              >
                <button
                  className="px-4 py-2 w-full no-sel flex border-none"
=======
  return (
    <div>
      <h1 className="text-xl mb-3 font-semibold tracking-wide">Test Results</h1>
      <div className="overflow-scroll">
        <table className="table-auto w-full mb-4">
          <thead>
            <tr className="text-left">
              <th
                className={`${
                  !editing ? 'bg-blue-900 bg-opacity-75' : 'bg-blue-900'
                } text-white border-r border-white text-sm`}
              >
                <button
                  className="px-4 py-2 w-full no-sel flex"
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                  onClick={() => sortTest('testCaseId')}
                >
                  <p className="mr-1">TC ID</p>
                  <IcoArwSort
                    className={
                      'fill-current w-3 h-4 mt-px transform' +
                      (!!sortedBy.match('testCaseId')
                        ? 'text-gr-600'
                        : 'rotate-180 text-gr-300')
                    }
                  />
                </button>
              </th>
              <th
                className={`${
<<<<<<< HEAD
                  !editing ? '' : 'bg-opacity-75'
                } text-white border-r border-white text-sm large`}
                style={{ width: '6%' }}
=======
                  !editing ? 'bg-blue-900 bg-opacity-75' : 'bg-blue-900'
                } text-white border-r border-white text-sm`}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
              >
                <button
                  className="px-4 py-2 w-full no-sel flex"
                  onClick={() => sortTest('protocol')}
                >
                  <p className="mr-1">Protocol</p>
                  <IcoArwSort
                    className={
                      'fill-current w-3 h-4 mt-px transform' +
                      (!!sortedBy.match('protocol')
                        ? 'text-gr-600'
                        : 'rotate-180 text-gr-300')
                    }
                  />
                </button>
              </th>
              <th
                className={`${
<<<<<<< HEAD
                  !editing ? '' : 'bg-opacity-75'
                } text-white border-r border-white text-sm`}
                style={{ width: '11%' }}
              >
                <button
                  className="px-4 py-2 w-full no-sel flex"
                  onClick={() => sortTest('runTime')}
=======
                  !editing ? 'bg-blue-900 bg-opacity-75' : 'bg-blue-900'
                } text-white border-r border-white text-sm`}
              >
                <button
                  className="px-4 py-2 w-full no-sel flex"
                  onClick={() => sortTest('time')}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                >
                  <p className="mr-1">Time</p>
                  <IcoArwSort
                    className={
                      'fill-current w-3 h-4 mt-px transform' +
<<<<<<< HEAD
                      (!!sortedBy.match('runTime')
=======
                      (!!sortedBy.match('time')
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                        ? 'text-gr-600'
                        : 'rotate-180 text-gr-300')
                    }
                  />
                </button>
              </th>
              <th
                className={`${
<<<<<<< HEAD
                  !editing ? '' : 'bg-opacity-75'
                } text-white border-r border-white text-sm large`}
                style={{ width: '6%' }}
=======
                  !editing ? 'bg-blue-900 bg-opacity-75' : 'bg-blue-900'
                } text-white border-r border-white text-sm`}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
              >
                <button
                  className="px-4 py-2 w-full no-sel flex"
                  onClick={() => sortTest('channel')}
                >
                  <p className="mr-1">Channel</p>
                  <IcoArwSort
                    className={
                      'fill-current w-3 h-4 mt-px transform' +
                      (!!sortedBy.match('channel')
                        ? 'text-gr-600'
                        : 'rotate-180 text-gr-300')
                    }
                  />
                </button>
              </th>
              <th
                className={`${
<<<<<<< HEAD
                  !editing ? '' : 'bg-opacity-75'
                } text-white border-r border-white text-sm large`}
                style={{ width: '6%' }}
=======
                  !editing ? 'bg-blue-900 bg-opacity-75' : 'bg-blue-900'
                } text-white border-r border-white text-sm`}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
              >
                <button
                  className="px-4 py-2 w-full no-sel flex"
                  onClick={() => sortTest('category')}
                >
                  <p className="mr-1">Category</p>
                  <IcoArwSort
                    className={
                      'fill-current w-3 h-4 mt-px transform' +
                      (!!sortedBy.match('category')
                        ? 'text-gr-600'
                        : 'rotate-180 text-gr-300')
                    }
                  />
                </button>
              </th>
              <th
                className={`${
<<<<<<< HEAD
                  !editing ? '' : 'bg-opacity-75'
                } text-white border-r border-white text-sm large`}
                style={{ width: '6%' }}
=======
                  !editing ? 'bg-blue-900 bg-opacity-75' : 'bg-blue-900'
                } text-white border-r border-white text-sm`}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
              >
                <button
                  className="px-4 py-2 w-full no-sel flex"
                  onClick={() => sortTest('result')}
                >
                  <p className="mr-1">Result</p>
                  <IcoArwSort
                    className={
                      'fill-current w-3 h-4 mt-px transform' +
                      (!!sortedBy.match('result')
                        ? 'text-gr-600'
                        : 'rotate-180 text-gr-300')
                    }
                  />
                </button>
              </th>
              <th
                className={`${
<<<<<<< HEAD
                  !editing ? '' : 'bg-opacity-75'
                } px-4 py-2 text-white border-r border-white text-sm`}
                style={{ width: '20%' }}
              >
                Waiver Comments (Tester)
              </th>
              <th
                className={`${
                  !editing ? '' : 'bg-opacity-75'
                } px-4 py-2 text-white text-sm`}
                style={{ width: '34%' }}
=======
                  !editing ? 'bg-blue-900 bg-opacity-75' : 'bg-blue-900'
                } px-4 py-2 text-white border-r border-white text-sm`}
              >
                Waiver Comments(Tester)
              </th>
              <th
                className={`${
                  !editing ? 'bg-blue-900 bg-opacity-75' : 'bg-blue-900'
                } px-4 py-2 text-white text-sm`}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
              >
                Waiver Comments (JCB)
              </th>
            </tr>
          </thead>
<<<<<<< HEAD
          <tbody>
            {tests?.map((test, index) => {
              return (
                <TestResultTableTr
                  test={test}
                  background={index % 2 == 0 ? 'bg-gray-50' : 'bg-gray-200'}
                  index={index}
                  borderStyle="border-r border-gray-500"
                  editing={editing}
                  editTesterComments={editTesterComments}
                  key={`result-tr-${index}`}
=======
          <tbody className="relative">
            {tests?.map((test, index) => {
              return (
                <TestResultTableTr
                  key={`testResultTr-${index}`}
                  test={test}
                  backgroundEditing={
                    index % 2 == 0 ? 'bg-gray-50' : 'bg-gray-100'
                  }
                  background={
                    index % 2 == 0
                      ? 'bg-gray-500 bg-opacity-50'
                      : 'bg-gray-600 bg-opacity-50'
                  }
                  borderStyle="border-r border-gray-500"
                  edit={edit}
                  editing={editing}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                />
              );
            })}
          </tbody>
        </table>
      </div>
<<<<<<< HEAD
      <div className="py-4 flex lg:justify-evenly sm:gap-4 flex-col sm:flex-row">
=======
      <div className="py-4 flex lg:justify-around sm:gap-4 flex-col sm:flex-row">
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        <h1 className="lg:text-lg font-semibold tracking-wide">
          Total Test Cases Applicable: {testsApplicable}
        </h1>
        <h1 className="lg:text-lg font-semibold tracking-wide">
          Total Test Cases Executed: {testsExecuted}
        </h1>
        <h1 className="lg:text-lg font-semibold tracking-wide">
          Total Test Cases Passed: {testsPassed}
        </h1>
        <h1 className="lg:text-lg font-semibold tracking-wide">
          Total Test Cases Failed: {testsFailed}
        </h1>
      </div>
<<<<<<< HEAD
      <div className="py-4 flex flex-col sm:flex-row justify-between gap-2">
        {currentStep == 1 ? (
          <button
            onClick={() => generateReports()}
            className="bg-blue-400 py-2 px-6 text-white rounded-xl "
          >
            Generate reports
          </button>
        ) : (
          <button
            onClick={e => openModal(e)}
            className={`${
              currentStep == 2 ? 'bg-blue-400' : 'bg-gray-400'
            } py-2 px-6 text-white rounded-xl `}
            disabled={currentStep != 2}
          >
            Submit Report
          </button>
        )}
        <p className="text-2xl text-red-500">{errorMsg}</p>
=======
      <div className="mt-5 flex-col sm:flex-row gap-4 flex justify-between">
        {editing ? (
          <div className="flex">
            <button
              className="bg-gray-500 py-2 px-9 rounded-lg text-white mr-6"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue-600 px-5 rounded-lg text-white flex items-center justify-between gap-4"
              onClick={e => changeResult(e)}
              disabled={submitted}
            >
              <Spinner isLoading={isLoading} />
              Save Changes
            </button>
          </div>
        ) : (
          <button
            className={`${
              !canEdit ? 'cursor-default bg-gray-400' : 'bg-blue-600'
            } py-2 px-9 rounded-lg text-white w-max`}
            onClick={() => setEditing(true)}
            disabled={!canEdit}
          >
            Edit
          </button>
        )}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        <CSVLink
          data={
            !!tests && tests.length > 0
              ? tests
                  .filter(test => !!test.testCaseId)
                  .map(test =>
                    omit(
                      {
                        ...test,
                        result:
                          test.result == 2
                            ? 'WAIVER'
                            : test.result == 0
                            ? 'FAIL'
                            : test.result == 1
                            ? 'PASS'
                            : test.result,
                      },
                      'testReportDetailId'
                    )
                  )
              : []
          }
<<<<<<< HEAD
=======
          headers={[
            { label: 'TC ID', key: 'testCaseId' },
            { label: 'Protocol', key: 'protocol' },
            { label: 'Time', key: 'runTime' },
            { label: 'Channel', key: 'channel' },
            { label: 'Category', key: 'category' },
            { label: 'Result', key: 'result' },
            { label: 'Waiver Comments(Tester)', key: 'waiverTesterComment' },
            { label: 'Waiver Comments (JCB)', key: 'waiverJcbComment' },
          ]}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
          filename={
            operatorId
              ? `${operatorId}${protocolVersion ? `_${protocolVersion}` : ''}${
                  approvalDate
                    ? `_${moment(approvalDate).format('YYYY-MM-DD')}`
                    : ''
                }.csv`
              : 'test_results.csv'
          }
        >
          <button
<<<<<<< HEAD
            className={`${
              currentStep === 4 ? 'bg-blue-600' : 'bg-gray-400'
            } py-2 px-6 text-white rounded-xl  w-full`}
            disabled={currentStep <= 3}
=======
            className={`bg-blue-600 text-white font-medium px-5 py-2 border border-gray-600 rounded-lg`}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
          >
            Export Test Results
          </button>
        </CSVLink>
      </div>
<<<<<<< HEAD
      {showModal && (
        <ModalConfimationTestReport
          isOpenModal={showModal}
          closeModal={() => setShowModal(false)}
          submitReport={submitReport}
          fetching={fetching}
        />
      )}
=======
      <div className="mt-4">
        {editedNow ? (
          <p>
            Updated at {new Date().toLocaleString()} by {user?.fullName}
          </p>
        ) : (
          ''
        )}
      </div>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    </div>
  );
}
