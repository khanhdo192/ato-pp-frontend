import Container from '@/components/container';
import TransitionLayout from '@/components/layout/transition';
import ProductEndpointInput from '@/components/productEndpointInput';
import TextH1 from '@/components/textH1';
import { postFetcher } from '@/lib/fetcher';
import { urlIsValid } from '@/utils/validator';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import useSWR from 'swr';

export default function ProductSetup() {
  const router = useRouter();
  const { productId } = router.query;
  const [serverEndpoint, setServerUrl] = useState('');
  const [productName, setProductName] = useState('');
  const [updating, setUpdating] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const { data: dataProduct, error: errorProduct } = useSWR(
    '/tester/product/getInfo',
    postFetcher({ productId })
  );

  useMemo(() => {
    if (dataProduct?.result) {
      const { product } = dataProduct.result;
      setServerUrl(product.serverUrl || '');
      setProductName(product.name);
    }
    if (errorProduct) {
      if (errorProduct?.response?.data?.rtnCode === '9897') {
        router.reload();
      }
      setFeedback({
        message: 'Ops! Error loading the Product',
        type: 'error',
      });
    }
  }, [dataProduct, errorProduct]);

  const handleUpdateProductEndpoint = async () => {
    try {
      setUpdating(true);
      setFeedback(null);

      if (!urlIsValid(serverEndpoint))
        return setFeedback({
          message: 'The url must contain from "http" to "https".',
          type: 'error',
        });

      await postFetcher({
        serverEndpoint,
        productId,
      })('/tester/update-server-endpoint');

      setFeedback({
        message: 'Product Endpoint updated successfully!',
        type: 'success',
      });
    } catch (error) {
      if (error?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
      setFeedback({ type: 'error', message: error?.message });
    } finally {
      setUpdating(false);
      setTimeout(() => setFeedback(null), 5000);
    }
  };

  return (
    <TransitionLayout
      activeSection="home"
      headerChildren={
        <h1 className="text-gr-400 md:text-2xl text-xl font-medium tracking-wide">
          Dashboard -{' '}
          <span className="text-b-800 font-semibold">Configure</span>
        </h1>
      }
    >
      <section className="h-test-output">
        <Container xtra="h-full">
          <TextH1 text={productName} xtra="font-extrabold pl-2" />
          <p className="text-sm pb-3.5 pl-2">
            Please enter your product endpoint and click on the check box to
            confirm.
          </p>
          <h1 className="pb-2.5 pl-2">Product Endpoint</h1>
          <div className="md:w-3/5">
            <ProductEndpointInput
              id="serverUrl"
              placeholder="https://test-url.com/acs/authentication"
              value={serverEndpoint}
              onChange={e => setServerUrl(e.target.value)}
              onClick={() => handleUpdateProductEndpoint()}
              isDisabled={updating}
              buttonIsDisabled={updating}
              type={updating ? 'spinner' : 'edit'}
              error={feedback && feedback.type.match('error')}
              errorMsg={
                feedback && feedback.type.match('error') && feedback.message
              }
              success={feedback && feedback.type.match('success')}
              successMsg={'Product Endpoint updated successfully!'}
            />
          </div>
        </Container>
      </section>
    </TransitionLayout>
  );
}
