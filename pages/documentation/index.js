import Container from '@/components/container';
import TransitionLayout from '@/components/layout/transition';
import UploadDocumentionFile from '@/components/uploadDocumentionFile';
import { fetcher } from '@/lib/fetcher';
import 'jspdf-autotable';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function DocumentationPage() {
  const [files, setFiles] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const { data: dataDocumentation, error: errorDocumentation } = useSWR(
    '/jcb/get-files-admin',
    fetcher,
    {
      revalidateOnFocus: true,
    }
  );

  useEffect(() => {
    if (!!dataDocumentation) {
      const newFiles = dataDocumentation.map(file => {
        return { ...file, modifyDate: file.modifyDate?.replace('T', ' ') };
      });
      setFiles(newFiles);
      setErrorMsg('');
    }
    if (errorDocumentation) {
      if (errorDocumentation?.response?.data?.rtnCode === '9897') {
        router.reload();
      }
      setFiles([]);
      setErrorMsg(
        'Something went wrong while trying to get the files documentation.'
      );
    }
  }, [dataDocumentation, errorDocumentation]);

  return (
    <TransitionLayout
      activeSection="documentation"
      headerChildren={
        <h1 className="text-gr-400 md:text-2xl text-xl font-medium tracking-wide">
          Documentation
        </h1>
      }
    >
      <section>
        <Container>
          <p className="lg:w-1/2 mb-7">
            To upload new documentation, click on the UPDATE FILES button and
            then select the new file(s) from your local computer. Click on
            SUBMIT button to perform a final review of your new file(s). To
            complete the submission process, click on "I CONFIRM".
          </p>
          <div>
            {Array.from({ length: 20 }).map((_, index) => (
              <UploadDocumentionFile
                key={index}
                number={index + 1}
                file={files.find(file => !!file && file.order == index + 1)}
              />
            ))}
          </div>
          {errorMsg && (
            <div className="w-full bg-red-400 rounded-lg border border-red-500 text-center py-4 mb-5">
              <p className="text-white font-medium">{errorMsg}</p>
            </div>
          )}
        </Container>
      </section>
    </TransitionLayout>
  );
}
