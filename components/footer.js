<<<<<<< HEAD
import Image from 'next/image';

export default function Footer({ active, label, children }) {
  return (
    <footer className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between text-sm space-y-2 lg:spacey-0 pt-6 lg:pt-2">
      <div className="flex flex-col items-center lg:block">
=======
export default function Footer({ active, label, children }) {
  return (
    <footer className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between text-sm space-y-2 lg:spacey-0 pt-6 lg:pt-2 pb-16 lg:pb-20 2xl:pb-10">
      {/*  left content */}
      <div>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        <a
          href="https://atomworks.io/3ds.html"
          target="_blank"
          className="block font-medium text-p-500 mb-2"
        >
          © 2023 Powered by Atomworks
        </a>
<<<<<<< HEAD
        <Image
          width="167"
          height="42"
          src="/images/positivessl_trust_seal_md_167x42.png"
          alt="JCB"
          className="mx-auto mb-6 lg:m-0"
        />
      </div>
=======
        <img
          className="mx-auto mb-6 lg:m-0"
          src="../images/positivessl_trust_seal_md_167x42.png"
        />
      </div>
      {/*  right  content */}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      <div>
        <p className="text-b-600">JCB Co. Ltd.</p>
      </div>
    </footer>
  );
}
