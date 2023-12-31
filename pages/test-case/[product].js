<<<<<<< HEAD
import Btn from '@/components/btn';
import BtnNextCase from '@/components/btnNextCase';
=======
import BtnNextCase from '@/components/btnNextCase';
import BtnTableTitle from '@/components/btnTableTitle';
import BtnUp from '@/components/btnUp';
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
import Container from '@/components/container';
import ContainerCol_2 from '@/components/containerCol_2';
import ContainerCol_3 from '@/components/containerCol_3';
import Divider from '@/components/divider';
import FeedbackMsg from '@/components/feedbackMsg';
<<<<<<< HEAD
import { IcoSearch, IcoView } from '@/components/icons';
import TransitionLayout from '@/components/layout/transition';
import Spinner from '@/components/spinner';
import History from '@/components/test-case/history';
import Procedure from '@/components/test-case/procedure';
import Result from '@/components/test-case/result';
import ModalSelectTestCases from '@/components/test-case/modal/modalSelectTestCases';
import ModalTestSummary from '@/components/test-case/modal/modalTestSummary';
=======
import Footer from '@/components/footer';
import Header from '@/components/header';
import { IcoReturn, IcoSearch, IcoView } from '@/components/icons';
import Nav from '@/components/nav';
import ResultsItem from '@/components/resultsItem';
import Spinner from '@/components/spinner';
import TableRowHistory from '@/components/tableRowHistory';
import ModalSelectTestCases from '@/components/testCase/modalSelectTestCases';
import ModalTestSummary from '@/components/testCase/modalTestSummary';
import Procedure from '@/components/testCase/Procedure';
import TextH3 from '@/components/textH3';
import UserThumb from '@/components/userThumb';
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
import {
  getDate,
  getHistoryBothVersions,
  getTime,
  getViewTestLogs,
  handleSort,
} from '@/helpers/fn';
import { currJobState } from '@/helpers/getters';
import { postFetcher } from '@/lib/fetcher';
<<<<<<< HEAD
import loadable from '@loadable/component';
import cloneDeep from 'lodash/cloneDeep';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import TestCasesContainer from '../../containers/TestCases';
=======
import useUser from '@/lib/useUser';
import loadable from '@loadable/component';
import cloneDeep from 'lodash/cloneDeep';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TestCasesContainer from '../../containers/TestCases';

>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
const ReactJson = loadable(() => import('react-json-view'));

const switchTabs = {
  procedures: ({ procedure, testCaseId }) => (
    <Procedure testCaseResults={procedure} testCaseId={testCaseId} />
  ),
  results: ({ testResults, testCaseId, testLogs }) => (
<<<<<<< HEAD
    <Result
      testResults={testResults}
      testCaseId={testCaseId}
      testLogs={testLogs}
    />
=======
    <div className="border border-gray-400 mb-3 lg:mb-6 p-7 pr-2 lg:p-7 lg:pr-3 bg-gray-50 rounded-xl">
      <div className="h-test scroll overflow-y-scroll overflow-x-hidden  box-border pr-4">
        <div className="mt-1 mb-6">
          <h1 className="text-blue-500 font-medium">{testCaseId}</h1>
          <h2 className="font-normal">
            The following pass criteria shall be fulfilled
          </h2>
        </div>

        {!testResults && (
          <p className="max-w-full break-all whitespace-pre-wrap text-b-600 text-sm tracking-wide">
            Response: No Result Found!
          </p>
        )}
        {testResults?.steps.map(r => {
          return (
            <ResultsItem
              title={r?.name}
              isPass={r?.pass}
              description={r?.itemessage}
              errorMessage={r?.errorMessage}
              req={r?.reqId}
              testLogs={testLogs}
              correctValue={r?.correctValue}
              responseBody={r?.responseBody}
            />
          );
        })}
      </div>
    </div>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  ),
  history: ({
    historiesShowed,
    setHistories,
    loadMoreHistories,
    setTestCaseAndSelectTestCaseId,
    activeRowHistory,
    setSortedBy,
    sortedBy,
    setIsSorted,
    handleSort,
    getDate,
    getTime,
    filterHistories,
    filterStr,
  }) => (
<<<<<<< HEAD
    <History
      historiesShowed={historiesShowed}
      setHistories={setHistories}
      loadMoreHistories={loadMoreHistories}
      setTestCaseAndSelectTestCaseId={setTestCaseAndSelectTestCaseId}
      activeRowHistory={activeRowHistory}
      setSortedBy={setSortedBy}
      sortedBy={sortedBy}
      setIsSorted={setIsSorted}
      handleSort={handleSort}
      getDate={getDate}
      getTime={getTime}
      filterHistories={filterHistories}
      filterStr={filterStr}
    />
=======
    <div className="border border-gray-400 mb-3 lg:mb-6 p-7 pr-2 lg:p-7 lg:pr-3 bg-white rounded-xl">
      <div className="h-test scroll overflow-y-scroll overflow-x-hidden  box-border pr-4">
        <div className="mt-1 mb-8">
          <h1 className="text-blue-500 font-medium text-xl">History Results</h1>
          <h2 className="font-normal">
            The most recent 30 results are loaded by default. Click Load More to
            load more previous results, or input a specific date
          </h2>
        </div>
        <div className="relative md:flex items-center justify-between -mt-8 md:mt-0 mb-7">
          <button
            className="bg-gray-400 text-white px-5 py-2 rounded-lg"
            onClick={() => loadMoreHistories()}
          >
            Load More
          </button>
        </div>
        <div className="mb-6">
          <div className="hidden md:grid grid-cols-hist-table-md border-b border-gr-400">
            <BtnTableTitle
              label="Date"
              buttonStyles="bg-blue-900 py-1.5 border-r border-white"
              labelStyle="text-white"
              justify="center"
              onClick={() =>
                handleSort({
                  list: historiesShowed,
                  setlist: setHistories,
                  value: 'date',
                  setSortedBy,
                  sortedBy,
                  setIsSorted,
                })
              }
              active={!!sortedBy.match('date')}
            />
            <BtnTableTitle
              label="Time"
              buttonStyles="bg-blue-900 py-1.5  border-r border-white"
              labelStyle="text-white"
              justify="center"
              onClick={() =>
                handleSort({
                  list: historiesShowed,
                  setlist: setHistories,
                  value: 'time',
                  setSortedBy,
                  sortedBy,
                  setIsSorted,
                })
              }
              active={!!sortedBy.match('time')}
            />
            <BtnTableTitle
              label="Results"
              buttonStyles="bg-blue-900 py-1.5"
              labelStyle="text-white"
              justify="center"
              onClick={() =>
                handleSort({
                  list: historiesShowed,
                  setlist: setHistories,
                  value: 'allPass',
                  setSortedBy,
                  sortedBy,
                  setIsSorted,
                })
              }
              active={!!sortedBy.match('allPass')}
            />
          </div>
          {historiesShowed &&
            historiesShowed.length > 0 &&
            historiesShowed.map((h, index) => (
              <TableRowHistory
                data={[getDate(h.createdTime), getTime(h.createdTime)]}
                success={h.allPass == 1}
                isActive={activeRowHistory === index}
                textCenter="text-center"
                styles="border-r border-gray-500 py-1.5"
                resultText={true}
                onClick={() =>
                  setTestCaseAndSelectTestCaseId({
                    index: index,
                    testCaseId: h.jcbTestCaseId,
                    testCaseResultId: h.id,
                    xmlVersion: h.xmlVersion,
                  })
                }
              />
            ))}
        </div>
      </div>
    </div>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  ),
};

const labelButtonResult = direction => {
  let label = direction;
  switch (direction) {
<<<<<<< HEAD
=======
    case 'DS2SERVER':
      label = 'DS 2 SERVER';
      break;
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    case '3DSR23DSS':
      label = '3DSR to 3DSS';
      break;
    case '3DSS2DS':
      label = '3DSS to DS';
      break;
    case 'DS2ACS':
      label = 'DS to ACS';
      break;
    case '3DSR2ACS':
      label = '3DSR to ACS';
      break;
    case 'send':
      label = 'ACS to Challenge';
      break;
    case 'result':
      label = 'ACS to Challenge';
      break;
    case 'ACS2DS':
      label = 'ACS to DS';
      break;
    case 'DS23DSS':
      label = 'DS to 3DSS';
      break;
<<<<<<< HEAD
    case null:
      label = 'null';
      break;
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  }
  return label;
};

<<<<<<< HEAD
const buttonLabel = (label, tab, actualTab, changeTab) => (
  <Btn
    label={label}
    xtra={`my-2 lg:my-0 ${actualTab == tab ? 'order-last lg:order-none' : ''}`}
    onClick={() => changeTab(tab)}
    isActive={actualTab == tab}
    secondary={actualTab != tab}
  />
);

=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
function TestCasePage({
  testSet,
  fisrtList,
  currJob,
<<<<<<< HEAD
  testCaseResult,
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  initialTestCaseId,
  history,
  lastTestSet,
  testProcedure,
  versions,
  productFromDash,
<<<<<<< HEAD
  treeMutate,
}) {
  const [tab, setTab] = useState('procedures');
  const [isOpenTest, setIsOpenTest] = useState(false);
  const [isOpenSummary, setIsOpenSummary] = useState(false);
  const router = useRouter();
  const { product } = router.query;

  const currentProduct = useMemo(() => {
    return productFromDash?.find(p => p?.productId === product);
  }, [productFromDash, product]);

  const testSetLength = testSet?.length;
  const [filterTree, setFilterTree] = useState(cloneDeep(testSet));

=======
  info,
}) {
  const { user } = useUser({ redirectTo: '/login' });
  const router = useRouter();
  const { product, tc_id } = router.query;
  const testSetLength = testSet.length;

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [tab, setTab] = useState('procedures');
  const [isOpenTest, setIsOpenTest] = useState(false);
  const [isOpenSummary, setIsOpenSummary] = useState(false);
  const [filterTree, setFilterTree] = useState(cloneDeep(testSet));
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  const [statusGeneralProcess, setStatusGeneralProcess] = useState(
    currJobState(currJob)
  );
  const [modalRunning, setmodalRunning] = useState(
    currJobState(currJob) == 'runing'
  );
  const [currentStatus, setCurrentStatus] = useState(currJob);
<<<<<<< HEAD

=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  const [testCaseId, setTestCaseId] = useState(initialTestCaseId);
  const [testCase, setTestCase] = useState(
    Object.values(testSet).find(tc => tc.id == testCaseId)
  );
  const [procedure, setProcedure] = useState(testProcedure);
  const [testResults, setTestResults] = useState(null);
  const [testLogs, setTestLogs] = useState(getViewTestLogs(null));
  const [testLogButtonSelected, setTestLogButtonSelected] = useState(0);
  const [histories, setHistories] = useState(history);
  const [historiesShowed, setHistoriesShowed] = useState(
    histories
      ? histories.length >= 30
        ? histories.slice(0, 30)
        : histories
      : []
  );
  const [testSets, setTestSets] = useState(
    fisrtList
      ? fisrtList.reverse().map((set, index) => {
          set.session = index;
          return set;
        })
      : null
  );
  const [indexTestCase, setindexTestCase] = useState(0);
  const [paginateTestCaseIds, setPaginateTestCaseIds] = useState(lastTestSet);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTestLogs, setIsLoadingTestLogs] = useState(false);
  const [sortedBy, setSortedBy] = useState('');
  const [isSorted, setIsSorted] = useState(false);
<<<<<<< HEAD
=======
  const [activeRowHistory, setActiveRowHistory] = useState(null);
  const [filterStr, setFilterStr] = useState('');
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  const [isBusySearch, setIsBusy] = useState(false);

  let isBusy;

<<<<<<< HEAD
  const [activeRowHistory, setActiveRowHistory] = useState(null);
  const [filterStr, setFilterStr] = useState('');
  const [statusId, setStatusId] = useState(currentProduct?.statusId);
  const [isExecuted, setIsExecuted] = useState(false);

=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  const searchTestInPaginate = q => {
    const filterList = lastTestSet
      .filter(pag => pag.toLowerCase().includes(q.toLowerCase()))
      .sort();
    if (filterList.length > 0) {
      setPaginateTestCaseIds(filterList);
      setTestCaseId(filterList[0]);
      setTestCase({ id: filterList[0] });
    } else {
      setPaginateTestCaseIds([]);
      setTestCaseId(null);
      setTestCase({ id: null });
      setTestLogs([]);
    }
  };

  const searchInputChange = q => {
    clearTimeout(isBusy);
    isBusy = setTimeout(function () {
      searchTestInPaginate(q);
    }, 1300);
  };

  const setTestCaseAndSelectTestCaseId = ({
    index,
    testCaseId,
    testCaseResultId,
  }) => {
    setIsLoading(true);
    if (activeRowHistory == index) {
      setTestLogs([]);
      setTestResults(null);
      setActiveRowHistory(null);
      setIsLoading(false);
      return;
    }

    const testCase = {
      id: testCaseId,
      testCaseResultId: testCaseResultId,
    };

    setTestCase(cloneDeep(testCase));
    setTestCaseId(testCaseId);
    setActiveRowHistory(index);
  };

  const changeIndexTestCase = index => {
    setIsLoading(true);
    setindexTestCase(index);
    changeTestCaseId(paginateTestCaseIds[index]);
  };

  const changeTestCaseId = testID => {
    if ((!testID && !testCaseId) || (!testID && !testCase)) setIsLoading(false);

    const Tcase = Object.values(testSet).find(tc => tc.id == testID);

    setTestLogs([]);
    setTestResults(null);
    setActiveRowHistory(null);
    setHistories(null);

    setTestCaseId(cloneDeep(testID));
    setTestCase(cloneDeep(Tcase));
  };

  const loadMoreHistories = () => {
    const totalhistories = histories.length;

    if (historiesShowed.length + 10 <= totalhistories)
      setHistoriesShowed(histories.slice(0, historiesShowed.length + 10));
    else setHistoriesShowed(histories);
  };

  const filterHistories = value => {
    setFilterStr(value);
    setHistoriesShowed(
      histories.filter(item => getDate(item.createdTime).includes(value))
    );
  };

  useEffect(() => setIsSorted(false), [isSorted]);

  useEffect(() => {
<<<<<<< HEAD
=======
    if (tc_id) {
      searchInputChange(tc_id);
    }
  }, [tc_id]);

  useEffect(() => {
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    if (!testCaseId || !testCase) {
      setHistories([]);
      setHistoriesShowed([]);
      setActiveRowHistory(null);
      setTestLogs([]);
      setTestResults(null);
      setProcedure(null);
      setIsSorted(true);
      setIsLoading(false);
      setTestLogButtonSelected(0);
      return;
    }

    const p1 = testCaseId
      ? postFetcher({
          productId: product,
          testCaseId: testCaseId,
        })('/tester/products/tc/getTcHistory')
      : null;

    const p2 = testCaseId
      ? postFetcher({
          productId: product,
          testCaseId: testCaseId,
        })('/tester/products/tc/getTestProcedure')
      : null;

    Promise.all([p1, p2])
      .then(values => {
        if (values[0]) {
          const his = getHistoryBothVersions(values[0]?.result?.histories);
          setHistories(his);
          setHistoriesShowed(his && his.length >= 30 ? his.slice(30) : his);

          if (
            (his && his[0]?.jcbTestCaseId && his[0]?.id) ||
            testCase?.testCaseResultId
          ) {
            setIsLoadingTestLogs(true);
            setIsBusy(true);
<<<<<<< HEAD
=======

>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
            const p3 = postFetcher({
              testCaseId: testCaseId,
              testCaseResultId: testCase?.testCaseResultId || his[0].id,
              productId: product,
            })('/tester/products/tc/getTcResults');

            p3.then(result => {
              setIsLoadingTestLogs(false);
              setIsBusy(false);
<<<<<<< HEAD
=======

>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
              if (!testCaseId || result.rtnCode != '1' || !result?.result) {
                setTestLogs([]);
                setTestResults(null);
                setActiveRowHistory(null);
                return;
              }

              const logs = getViewTestLogs(result?.result?.testLog);
              let steps = result?.result?.steps;

              logs.map(log => {
                if (Array.isArray(log)) {
                  const l = log.filter(
                    log => log.direction === '3DSR2ACS' && log.responseBody
                  );

                  if (l) {
                    let i = 0;
                    steps = steps.map(step => {
                      if (step.correctValue === 'HTML' && step.pass) {
                        if (i === l.length) return step;
                        step.responseBody = l[i].responseBody;
                        i++;
                      }
                      return step;
                    });
                  }
                } else {
                  const l = log.direction === '3DSR2ACS' && log;

                  if (l) {
                    steps = steps.map(step => {
                      if (step.correctValue === 'HTML' && step.pass) {
<<<<<<< HEAD
                        step.responceBody = l.responseBody;
=======
                        step.responseBody = l.responseBody;
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                      }
                      return step;
                    });
                  }
                }
              });
<<<<<<< HEAD

=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
              setTestLogs(getViewTestLogs(result?.result?.testLog));
              setTestResults({ ...result?.result, steps });

              if (!activeRowHistory) setActiveRowHistory(0);
              if (testCase?.sessionId) setActiveRowHistory(null);
            }).catch(error => {
              if (error?.response?.data?.rtnCode === '9897') {
                router.reload();
              }
            });
          } else {
            setTestLogs([]);
            setTestResults(null);
            setActiveRowHistory(null);
          }
        }

        if (values[1]) {
          setProcedure(values[1]?.result);
          setTestLogButtonSelected(0);
        }

<<<<<<< HEAD
        if (isExecuted) {
          setIsExecuted(false);
        }
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        setIsSorted(true);
        setIsLoading(false);
      })
      .catch(error => {
        if (error?.response?.data?.rtnCode === '9897') {
<<<<<<< HEAD
          router.push('/login');
        }
      });
  }, [testCase, testCaseId, isExecuted, isOpenTest]);

  return (
    <>
      <TransitionLayout
        activeSection="home"
        headerChildren={
=======
          router.reload();
        }
      });
  }, [testCase, testCaseId]);
  return (
    <main className="relative flex w-full min-h-screen 2xl:min-h-main m-auto max-w-1688 2xl:my-8 2xl:pl-8">
      <Nav
        status={isSideBarOpen}
        setStatus={setIsSideBarOpen}
        activeSection={'home'}
        productId={product}
      />
      <div className="relative z-0 w-full p-2 lg:pt-2 lg:ml-menu-lg 2xl:ml-menu py:0 lg:px-8">
        <Header setStatus={setIsSideBarOpen}>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
          <h1 className="text-gr-400 md:text-2xl text-xl font-medium tracking-wide">
            Dashboard -{' '}
            <span className="md:text-2xl text-xl text-blue-900 font-medium">
              Test Panel
            </span>
          </h1>
<<<<<<< HEAD
        }
      >
=======
          <UserThumb alt={user?.fullName} />
        </Header>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        {testSet && testSet.alert && (
          <FeedbackMsg
            type="info"
            text="Notice: Certain Native or HTML UI options are not selected in your ICS Form, the corresponding test cases will therefore not be executed in this Compliance testing session. If this is not your intention please contact your 3DS Laboratory or Atomworks service representative."
          />
        )}
        <section>
          <Container>
            <div className="mb-3">
              <div className="flex flex-col md:flex-row gap-6 justify-between mb-5">
                <h1 className="text-2xl font-semibold ">
<<<<<<< HEAD
                  {currentProduct?.productName}
                </h1>
                <div className="flex flex-col md:flex-row gap-5">
                  <button
                    onClick={() => setIsOpenTest(true)}
                    className="flex border border-black bg-gray-200 rounded-lg items-center justify-center px-3 py-1"
                  >
                    <IcoView className="mr-4" />
                    <p>
                      Test Controller {paginateTestCaseIds?.length} /{' '}
                      {testSetLength}
                    </p>
                  </button>
                  <button
                    onClick={() => setIsOpenSummary(true)}
                    className="flex border border-black bg-gray-200 rounded-lg items-center justify-center px-3 py-1"
                  >
                    <p>Prepare Submission</p>
                  </button>
=======
                  {productFromDash?.productName}
                </h1>
                <div className="flex flex-col md:flex-row gap-5">
                  <button className="flex border border-black bg-gray-200 rounded-lg items-center px-3 py-1">
                    <Link href={`/product-validation/${product}`}>
                      <a className="flex">
                        <IcoReturn className="mr-2" />
                        Return to PM
                      </a>
                    </Link>
                  </button>
                  <button
                    onClick={() => setIsOpenTest(true)}
                    className="flex border border-black bg-gray-200 rounded-lg items-center px-3 py-1"
                  >
                    <IcoView className="mr-4" />
                    <p>
                      Test Controller {paginateTestCaseIds.length} /{' '}
                      {testSetLength}
                    </p>
                  </button>
                  {/* <button
                    onClick={() => setIsOpenSummary(true)}
                    className="flex border border-black bg-gray-200 rounded-lg items-center px-3 py-1"
                  >
                    <p>Prepare Submission</p>
                  </button> */}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                </div>
              </div>
            </div>
            <ContainerCol_2>
              <div>
                <ContainerCol_3 xtra="mb-5">
                  <button
                    onClick={() => setTab('procedures')}
                    className={`px-10 py-1.5 text-white ${
                      'procedures' == tab ? 'bg-blue-500' : 'bg-gray-400'
                    } rounded-lg text-center mb-2`}
                  >
                    Procedures
                  </button>
                  <button
                    onClick={() => setTab('results')}
                    className={`px-10 py-1.5 text-white ${
                      'results' == tab ? 'bg-blue-500' : 'bg-gray-400'
                    } rounded-lg text-center mb-2`}
                  >
                    Results
                  </button>
                  <button
                    onClick={() => setTab('history')}
                    className={`px-10 py-1.5 text-white ${
                      'history' == tab ? 'bg-blue-500' : 'bg-gray-400'
                    } rounded-lg text-center mb-2`}
                  >
                    History
                  </button>
                </ContainerCol_3>
                {switchTabs[tab]({
                  historiesShowed,
                  setHistories,
                  loadMoreHistories,
                  setTestCaseAndSelectTestCaseId,
                  activeRowHistory,
                  setSortedBy,
                  sortedBy,
                  setIsSorted,
                  handleSort,
                  getDate,
                  getTime,
                  filterHistories,
                  filterStr,
                  procedure,
                  testResults,
                  testCaseId,
                  testLogs,
                })}
                <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
                  <div className="flex space-x-2 mt-2 md:mt-0">
                    <BtnNextCase
                      ico="start"
                      isDisable={
<<<<<<< HEAD
                        paginateTestCaseIds?.length == 0 || indexTestCase == 0
=======
                        paginateTestCaseIds.length == 0 || indexTestCase == 0
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                      }
                      onClick={() => changeIndexTestCase(0)}
                    />
                    <BtnNextCase
                      ico="prev"
                      isDisable={
<<<<<<< HEAD
                        paginateTestCaseIds?.length == 0 || indexTestCase == 0
=======
                        paginateTestCaseIds.length == 0 || indexTestCase == 0
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                      }
                      onClick={() => changeIndexTestCase(indexTestCase - 1)}
                    />
                    <BtnNextCase
                      ico="next"
                      isDisable={
<<<<<<< HEAD
                        paginateTestCaseIds?.length == 0 ||
                        indexTestCase == paginateTestCaseIds?.length - 1
=======
                        paginateTestCaseIds.length == 0 ||
                        indexTestCase == paginateTestCaseIds.length - 1
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                      }
                      onClick={() => changeIndexTestCase(indexTestCase + 1)}
                    />
                    <BtnNextCase
                      ico="end"
                      isDisable={
<<<<<<< HEAD
                        paginateTestCaseIds?.length == 0 ||
                        indexTestCase == paginateTestCaseIds?.length - 1
                      }
                      onClick={() =>
                        changeIndexTestCase(paginateTestCaseIds?.length - 1)
=======
                        paginateTestCaseIds.length == 0 ||
                        indexTestCase == paginateTestCaseIds.length - 1
                      }
                      onClick={() =>
                        changeIndexTestCase(paginateTestCaseIds.length - 1)
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                      }
                    />
                  </div>
                  <div className={'relative w-full md:w-44'}>
                    <IcoSearch className="absolute top-2 left-2 w-4.5 h-4.5 fill-current" />
                    <input
                      className="w-full input no-sel pl-9 text-black bg-gray-100 border-black"
                      type="text"
                      placeholder="Search Test Case"
                      onChange={e => searchInputChange(e.target.value)}
<<<<<<< HEAD
                      disabled={isBusySearch}
=======
                      disable={isBusySearch}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                    />
                  </div>
                </div>
              </div>
              <Divider style="lg:hidden" />
              <div>
                <div
                  className={`${
                    !!testLogs && testLogs.length !== 0 ? 'mb-5' : ''
<<<<<<< HEAD
                  } flex overflow-x-auto w-full`}
=======
                  } flex overflow-x-auto w-full gap-4`}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                >
                  {testLogs &&
                    testLogs.length !== 0 &&
                    testLogs.map((log, index) =>
                      Array.isArray(log) ? (
<<<<<<< HEAD
                        <div key={`test-log-${index}`}>
=======
                        <div>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                          <button
                            onClick={() => setTestLogButtonSelected(index)}
                            className={`px-14 py-1.5 text-white ${
                              testLogButtonSelected == index
                                ? 'bg-blue-500'
                                : 'bg-gray-400'
                            } rounded-lg`}
                            style={{ width: '235px' }}
                          >
                            <p className="w-full">
                              {labelButtonResult(
                                log[0].direction || log[1]?.direction
                              )}
                            </p>
                          </button>
                        </div>
                      ) : (
<<<<<<< HEAD
                        <div key={`test-log-${index}`}>
=======
                        <div>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
                          <button
                            onClick={() => setTestLogButtonSelected(index)}
                            className={`px-14 py-1.5 text-white ${
                              testLogButtonSelected == index
                                ? 'bg-blue-500'
                                : 'bg-gray-400'
                            } rounded-lg`}
                            style={{ width: '235px' }}
                          >
                            <p className="w-full">
                              {labelButtonResult(log.direction)}
                            </p>
                          </button>
                        </div>
                      )
                    )}
                </div>
                <div className="relative flex flex-col border border-gray-400 mb-3 lg:mb-4 mt-14 md:mt-0 bg-white rounded-xl">
                  <div
                    className={
                      'flex flex-grow  h-test-output scroll overflow-y-scroll overflow-x-auto bg-gray-200 rounded-xl ' +
                      (isLoadingTestLogs
                        ? 'items-center justify-center'
                        : 'p-6')
                    }
                  >
                    {isLoadingTestLogs ? (
                      <Spinner isLoading={true} color="text-b-320" />
                    ) : !testLogs || testLogs.length === 0 ? (
                      <p className="max-w-full break-all whitespace-pre-wrap text-gray-500 text-sm tracking-wide">
                        Response: No Result Found!
                      </p>
                    ) : (
                      <ReactJson
                        src={testLogs[testLogButtonSelected]}
                        displayDataTypes={false}
                        displayObjectSize={false}
                      />
                    )}
                  </div>
                </div>
              </div>
            </ContainerCol_2>
          </Container>
        </section>
<<<<<<< HEAD
      </TransitionLayout>
=======
        <Footer />
        <BtnUp />
      </div>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      <ModalSelectTestCases
        isOpen={isOpenTest}
        setIsOpenSummary={setIsOpenSummary}
        closeModal={() => setIsOpenTest(false)}
        product={product}
        versions={versions}
        testSet={testSet}
        testSetLength={testSetLength}
<<<<<<< HEAD
        testSets={testSets}
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        setTestSets={setTestSets}
        paginate={paginateTestCaseIds}
        setPaginate={setPaginateTestCaseIds}
        changeTestCaseId={changeTestCaseId}
        initalSetTest={lastTestSet}
        modalRunning={modalRunning}
        setmodalRunning={setmodalRunning}
        statusGeneralProcess={statusGeneralProcess}
        setStatusGeneralProcess={setStatusGeneralProcess}
        currentStatus={currentStatus}
        setCurrentStatus={setCurrentStatus}
<<<<<<< HEAD
        productFromDash={currentProduct}
=======
        productFromDash={productFromDash}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        filterTree={filterTree}
        setFilterTree={setFilterTree}
        isSorted={isSorted}
        setIsSorted={setIsSorted}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        testCaseId={testCaseId}
        setIndexPaginate={setindexTestCase}
<<<<<<< HEAD
        setTestCase={setTestCase}
        setTestCaseId={setTestCaseId}
        statusId={statusId}
        setIsExecuted={setIsExecuted}
        isExecuted={isExecuted}
        treeMutate={treeMutate}
=======
        setTestCaseId={setTestCaseId}
        setTestCase={setTestCase}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      />
      <ModalTestSummary
        isOpen={isOpenSummary}
        closeModal={() => setIsOpenSummary(false)}
        product={product}
        testSet={testSet}
        filterTree={filterTree}
        setFilterTree={setFilterTree}
        userTestSets={fisrtList}
        testSets={testSets}
        setTestSets={setTestSets}
        paginate={paginateTestCaseIds}
        setPaginate={setPaginateTestCaseIds}
        indexPaginate={indexTestCase}
        setIndexPaginate={setindexTestCase}
        setTestCase={setTestCase}
        setTestCaseId={setTestCaseId}
        changeTestCaseId={changeTestCaseId}
<<<<<<< HEAD
=======
        productFromDash={productFromDash}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isSorted={isSorted}
        setIsSorted={setIsSorted}
        testCaseId={testCaseId}
<<<<<<< HEAD
        statusId={statusId}
        setStatusId={setStatusId}
      />
    </>
=======
        info={info}
      />
      {isLoading && (
        <div
          className="fixed left-0 top-0 flex items-center justify-center h-full w-full z-50"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <Spinner isLoading={true} color="text-b-320" size="10" />
        </div>
      )}
    </main>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  );
}

export default TestCasesContainer(TestCasePage);
