<<<<<<< HEAD
import Container from '@/components/container';
import FeedbackMsg from '@/components/feedbackMsg';
import TransitionLayout from '@/components/layout/transition';
import Spinner from '@/components/spinner';
import { getHistoryBothVersions } from '@/helpers/fn';
import { fetcher, postFetcher } from '@/lib/fetcher';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR, { SWRConfig, cache } from 'swr';

export default function TestCasesContainer(WrappedComponent) {
  return function DashboardPage() {
=======
import React, { useState, useEffect } from 'react';
import useSWR, { SWRConfig, cache } from 'swr';
import useUser from '@/lib/useUser';
import { useRouter } from 'next/router';
import { fetcher, postFetcher } from '@/lib/fetcher';
import { getHistoryBothVersions } from '@/helpers/fn';

import Container from '@/components/container';
import Breadcrumb from '@/components/breadcrumb';
import BreadcrumbItem from '@/components/breadcrumbItem';
import Spinner from '@/components/spinner';
import BtnUp from '@/components/btnUp';
import Nav from '@/components/nav';
import Header from '@/components/header';
import UserThumb from '@/components/userThumb';
import FeedbackMsg from '@/components/feedbackMsg';
import Footer from '@/components/footer';

export default function TestCasesContainer(WrappedComponent) {
  return function DashboardPage() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const { user } = useUser({ redirectTo: '/login' });
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    const router = useRouter();
    const { product } = router.query;
    let tree = null;
    let lastTestSetExecuted = null;
    let testCase = null;
    let testCaseId = null;
    let currJobResult = null;
    let fisrtListResult = null;
    let history = null;
    let initTestProcedure = null;
    let versions = null;
<<<<<<< HEAD
=======
    let productFromDashboard = null;
    let info = null;

    const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710

    useEffect(() => {
      return function cleanup() {
        console.warn('unmounting component');
        cache.clear();
      };
    }, [product]);

<<<<<<< HEAD
    const { data: dataProductsDashboard, error: errorProductsDashboard } =
      useSWR('/tester/dashboard', fetcher);
    const productFromDashboard = dataProductsDashboard?.result?.data;
=======
    const { data: dataProductInfo, error: errorProductInfo } = useSWR(
      '/jcb/productProcess/getProductInfo',
      postFetcher({ productId: product })
    );
    info = dataProductInfo?.result;

    const { data: dataProductsDashboard, error: errorProductsDashboard } =
      useSWR('/jcb/dashboard', fetcher);

    if (dataProductsDashboard?.result?.data) {
      dataProductsDashboard.result.data.map(p => {
        if (p.productId == product) return (productFromDashboard = p);
      });
    }
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710

    const { data: currJob, error: errorCurrJob } = useSWR(
      '/tester/products/tc/job/load',
      postFetcher({ productId: product })
    );
    currJobResult = currJob?.result;

    const { data: fisrtList, error: errorFisrtList } = useSWR(
      '/tester/products/tc/getTestSetList',
      postFetcher({
        productId: product,
      })
    );
    fisrtListResult = fisrtList?.result?.userTestSets;

<<<<<<< HEAD
    const {
      data: dataGetTree,
      error: errorGetTree,
      mutate: treeMutate,
    } = useSWR(
=======
    const { data: dataGetTree, error: errorGetTree } = useSWR(
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      '/tester/products/tc/getTcTree',
      postFetcher({
        productId: product,
      })
    );
    tree = dataGetTree?.result?.tcTree;

<<<<<<< HEAD
    if (tree && tree.length > 0 && fisrtListResult) {
=======
    if (tree && fisrtListResult) {
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      tree = tree.map(test => {
        return {
          id: test.jcb_test_case_id,
          pass: test.pass,
          checked: false,
          channel: test.channel,
          category: test.category,
          protocolVersion: test.protocolVersion,
        };
      });
      // get testCaseId of the latest test executed
      if (fisrtListResult.length > 0 && fisrtListResult[0]?.testCaseResults) {
        lastTestSetExecuted = [
          ...new Set(fisrtListResult[0].testCaseResults.map(tc => tc.tcId)),
        ];
<<<<<<< HEAD
        if (lastTestSetExecuted.length > 0) testCaseId = lastTestSetExecuted[0];
=======
        testCaseId = lastTestSetExecuted[0];
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      }

      // get testCaseId of the first test of the tree
      if (!testCaseId || !lastTestSetExecuted) {
        testCaseId = tree[0].id;
        lastTestSetExecuted = [testCaseId];
      }

      testCase = null;
    }

    const { data: dataTestProcedure, error: errorTestProcedure } = useSWR(
      testCaseId ? '/tester/products/tc/getTestProcedure' : null,
      postFetcher({
        testCaseId: testCaseId,
        productId: product,
      })
    );
    initTestProcedure = dataTestProcedure?.result;

    const { data: historyResult, error: historyError } = useSWR(
      testCaseId ? '/tester/products/tc/getTcHistory' : null,
      postFetcher({
        testCaseId: testCaseId,
        productId: product,
      })
    );
    history = historyResult?.result;

    const { data: dataVersions, error: errorVersions } = useSWR(
      '/tester/getAllProtocolVersion',
      postFetcher({})
    );
    versions = dataVersions?.result;

<<<<<<< HEAD
    if (errorGetTree && errorGetTree?.response?.data?.rtnCode === '9897') {
=======
    if (errorGetTree?.response?.data?.rtnCode === '9897') {
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      router.reload();
    }

    if (
      errorCurrJob ||
      errorFisrtList ||
      errorGetTree ||
      historyError ||
<<<<<<< HEAD
      errorProductsDashboard ||
      errorTestProcedure
    )
      return (
        <TransitionLayout
          activeSection="home"
          headerChildren={
            <h1 className="text-gr-400 md:text-2xl text-xl font-medium tracking-wide">
              Dashboard -{' '}
              <span className="md:text-2xl text-xl text-blue-900 font-medium">
                Test Panel
              </span>
            </h1>
          }
        >
          <section>
            <Container>
              <FeedbackMsg
                type="error"
                text="Error loading the product. Please try later"
                important
              />
            </Container>
          </section>
        </TransitionLayout>
      );
=======
      errorTestProcedure ||
      errorProductsDashboard
    ) {
      localStorage.setItem('isIdle', false);
      return (
        <main className="relative flex w-full min-h-screen 2xl:min-h-main m-auto max-w-1688 2xl:my-8 2xl:pl-8">
          <Nav
            status={isSideBarOpen}
            setStatus={setIsSideBarOpen}
            activeSection={'product-profile'}
          />

          <div className="relative z-0 w-full p-2 pt-20 lg:pt-2 lg:ml-menu-lg 2xl:ml-menu 2xl:ml-0 py:0 lg:px-8">
            <Header setStatus={setIsSideBarOpen}>
              <Breadcrumb>
                <BreadcrumbItem isFirst label="dashboard" />
                <BreadcrumbItem label="Test Panel" />
              </Breadcrumb>

              <div>
                <UserThumb alt={!!user ? user?.fullName : ''} />
              </div>
            </Header>

            <section>
              <Container>
                <FeedbackMsg
                  type="error"
                  text="Error loading the product. Please try later"
                  important
                />
              </Container>
            </section>

            <BtnUp />

            <Footer />
          </div>
        </main>
      );
    }
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710

    if (
      !fisrtListResult ||
      !currJobResult ||
      !tree ||
      !testCaseId ||
      !lastTestSetExecuted ||
      !initTestProcedure ||
      !productFromDashboard
<<<<<<< HEAD
    ) {
      return (
        <TransitionLayout
          activeSection="home"
          headerChildren={
            <h1 className="text-gr-400 md:text-2xl text-xl font-medium tracking-wide">
              Dashboard -{' '}
              <span className="md:text-2xl text-xl text-blue-900 font-medium">
                Test Panel
              </span>
            </h1>
          }
        >
          <section>
            <Container xtra="h-test-output flex items-center justify-center">
              <Spinner isLoading={true} color="text-b-320" size="10" />
            </Container>
          </section>
        </TransitionLayout>
      );
    }

=======
    )
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner isLoading={true} color="text-b-320" size="10" />
        </div>
      );
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    return (
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <WrappedComponent
          testSet={tree}
          fisrtList={fisrtListResult}
          currJob={currJobResult?.currJob}
          initialTestCaseId={testCaseId}
          history={getHistoryBothVersions(history?.histories)}
          lastTestSet={lastTestSetExecuted}
          testProcedure={initTestProcedure}
          versions={versions}
          productFromDash={productFromDashboard}
<<<<<<< HEAD
          treeMutate={treeMutate}
=======
          info={info}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        />
      </SWRConfig>
    );
  };
}
