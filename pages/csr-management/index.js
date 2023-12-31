import Breadcrumb from '@/components/breadcrumb';
import BreadcrumbItem from '@/components/breadcrumbItem';
import Btn from '@/components/btn';
import Container from '@/components/container';
import ContainerCol_2_1 from '@/components/containerCol_2_1';
import Divider from '@/components/divider';
import FeedbackMsg from '@/components/feedbackMsg';
import FormItemUpload from '@/components/formItemUpload';
import TransitionLayout from '@/components/layout/transition';
import TextH1 from '@/components/textH1';
import TextH2 from '@/components/textH2';
import { postMultipartFetcher } from '@/lib/fetcher';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CertificatesPage() {
  const defaultFeedback = { isFeedback: false, type: '', message: '' };
  const defaultLoading = { isLoading: false, event: '' };
  const [feedback, setFeedback] = useState(defaultFeedback);
  const [unsignedFile, setUnsignedFile] = useState(null);
  const [loading, setLoading] = useState(defaultLoading);
  const router = useRouter();

  const handleLoading = event =>
    setLoading({ isLoading: !loading.isLoading, event: event });
  const handleFeedback = feedback =>
    window.scrollTo(0, 0) & setFeedback(feedback);

  const handleDownload = async () => {
    try {
      handleLoading('download');

      const formData = new FormData();
      formData.append('file', unsignedFile, unsignedFile.name);

      const certificatesSignCsrRes = await postMultipartFetcher(formData)(
        '/tester/certificates/signCsr'
      );
      if (!certificatesSignCsrRes?.file)
        return handleFeedback({
          isFeedback: true,
          message: certificatesSignCsrRes?.data?.message,
          type: 'error',
        });

      const link = document.createElement('a');
      link.download = `signed-${
        unsignedFile.name.split('.').slice(0, -1).join('.') + '.crt'
      }`;
      const blob = new Blob([`${certificatesSignCsrRes?.file}`], {
        type: 'text/plain',
      });
      link.href = window.URL.createObjectURL(blob);
      link.click();

      handleFeedback({
        isFeedback: true,
        message: 'File signed downloaded successfully!',
        type: 'success',
      });
    } catch (e) {
      if (e?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
      handleFeedback({ isFeedback: true, type: 'error', message: e.message });
    } finally {
      setTimeout(() => handleFeedback(defaultFeedback), 5000);
      setLoading(defaultLoading);
      setUnsignedFile(null);
    }
  };

  const handleDownloadCACertificate = async () => {
    try {
      window.location.href = '/cert/root-ca-crt.zip';
      handleFeedback({
        isFeedback: true,
        message: 'File downloaded successfully!',
        type: 'success',
      });
    } catch (e) {
      if (e?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
      handleFeedback({ isFeedback: true, type: 'error', message: e.message });
    }
  };

  return (
    <TransitionLayout
      activeSection="csr-management"
      headerChildren={
        <Breadcrumb>
          <BreadcrumbItem isFirst label="dashboard" link="/dashboard" />
          <BreadcrumbItem label="csr management" />
        </Breadcrumb>
      }
    >
      <section className="h-test-output">
        {feedback.isFeedback ? (
          <Container>
            <FeedbackMsg type={feedback.type} text={feedback.message} />
          </Container>
        ) : null}
        <Container xtra="h-full">
          <TextH1 text="Csr Management" />
          <TextH2 text="You can then sign your certificates." />
          <Divider />
          <ContainerCol_2_1>
            <FormItemUpload
              id="csrToSign"
              label="CSR certificate to sign"
              filename={
                unsignedFile && unsignedFile?.name
                  ? unsignedFile.name
                  : 'File Name'
              }
              btnLabel="Select File"
              error={
                loading.isLoading &&
                loading.event.match('upload') &&
                !unsignedFile
              }
              errorMsg={
                loading.isLoading &&
                loading.event.match('upload') &&
                !unsignedFile
                  ? 'An error occurred while loading the file try again!'
                  : ''
              }
              onChange={e => setUnsignedFile(e.target.files[0])}
            />
            <div className="mt-6 grid grid-cols-2 items-center">
              <Btn
                label="Sign CSR"
                ico={
                  loading.isLoading && loading.event.match('download')
                    ? 'spinner'
                    : 'download'
                }
                xtra="mb-16 lg:mb-12 w-full h-14 mr-1"
                onClick={handleDownload}
                isDisable={
                  !unsignedFile ||
                  (loading.isLoading && loading.event.match('download'))
                }
              />
              <Btn
                label="CA Certificate"
                ico={
                  loading.isLoading && loading.event.match('download')
                    ? 'spinner'
                    : 'download'
                }
                xtra="mb-16 lg:mb-12 w-full  h-14 ml-1"
                onClick={handleDownloadCACertificate}
              />
            </div>
          </ContainerCol_2_1>
        </Container>
      </section>
    </TransitionLayout>
  );
}
