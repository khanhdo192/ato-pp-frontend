import Btn from '@/components/btn';
import Divider from '@/components/divider';
import FeedbackMsg from '@/components/feedbackMsg';
import FormItemCheckbox from '@/components/formItemCheckbox';
import ModalMain from '@/components/modalMain';
import ModalPopupMd from '@/components/modalPopupMd';
import TextH5 from '@/components/textH5';
import { postFetcher } from '@/lib/fetcher';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function ModalSubmitSession({ isOpen, setIsOpen, productId }) {
  const router = useRouter();
  const [feedback, setFeedback] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [buttonReturn, showButton] = useState(false);
  const [agree, setAgree] = useState(false);

  const { data: dataTcSummary, error: errorTcSummary } = useSWR(
    '/tester/products/tc/getTcSummary',
    postFetcher({ productId: productId })
  );
  const dataTc = dataTcSummary?.result?.tcSummary || {
    fail: 0,
    pass: 0,
    tcCount: 0,
  };

  useEffect(() => {
    if (errorTcSummary && errorTcSummary?.response?.data?.rtnCode === '9897') {
      router.reload();
    }
  }, [errorTcSummary]);

  const handlerCancel = () => {
    setFeedback(null);
    setAgree(false);
    setIsOpen(false);
  };

  const handlerReturnToDashboard = () => {
    router.push('/dashboard');
  };

  const handlerSubmitToReview = () => {
    try {
      if (!agree) return setFeedback({ type: 'error', text: 'You must Agree' });

      setFeedback(null);
      setSubmitted(true);

      const promise1 = postFetcher({
        productId: productId,
      })('/tester/submitToReview');

      promise1.then(result => {
        if (result.rtnCode != 1)
          setFeedback({
            type: 'error',
            text: result?.message || 'Something went wrong. Please try later',
          });
        else
          setFeedback({
            type: 'success',
            text: 'Submitted for review successfully',
          });
        showButton(true);
        setSubmitted(false);
      });
    } catch (e) {
      if (e?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
      setFeedback({ type: 'error', text: e.message });
    } finally {
      return setTimeout(() => setFeedback(null), 7000);
    }
  };

  return (
    <ModalMain isOpen={isOpen}>
      <ModalPopupMd
        title="Submit your session for stage validation?"
        text="please confirm your submission request."
      >
        <div className="grid grid-cols-2 -mb-5">
          <TextH5 text="Total Test Cases: " highliteText={dataTc.tcCount} />
          <TextH5 text="Total Passed: " highliteText={dataTc.pass} />
          <TextH5 text="Total Failed: " highliteText={dataTc.fail} />
        </div>

        <Divider />

        <p className="p">
          All your test results will be open to review and the selected session
          will be validated by JCB. You will not be able to perform any more
          tests during the validation period or revert this action.
        </p>

        {feedback && (
          <div className="mt-6">
            <FeedbackMsg type={feedback.type} text={feedback.text} important />
          </div>
        )}

        <div className="origin-top-left transform scale-110 mt-6">
          <FormItemCheckbox
            id="c0"
            label="I Agree"
            xtra="m-n pb-2.5 left-5"
            isChequed={agree}
            onClick={() => setAgree(!agree)}
          />
        </div>

        <Divider />
        {!buttonReturn ? (
          <div className="grid grid-cols-2 gap-3">
            <Btn
              label="Cancel"
              xtra="w-full"
              secondary
              onClick={() => handlerCancel()}
              isDisable={submitted}
            />
            <Btn
              label="Submit"
              xtra="w-full"
              onClick={() => handlerSubmitToReview()}
              isDisable={submitted}
            />
          </div>
        ) : (
          <Btn
            label="Return to Dashboard"
            xtra="w-full"
            onClick={() => handlerReturnToDashboard()}
          />
        )}
      </ModalPopupMd>
    </ModalMain>
  );
}
