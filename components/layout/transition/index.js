import BtnUp from '@/components/btnUp';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Nav from '@/components/nav';
import UserThumb from '@/components/userThumb';
import useUser from '@/lib/useUser';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TransitionLayout = ({ children, headerChildren, activeSection }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { user } = useUser();

  return (
    <main className="relative flex w-full min-h-screen 2xl:min-h-main m-auto max-w-1688 2xl:my-8 2xl:pl-8">
      <Nav
        status={isSideBarOpen}
        setStatus={setIsSideBarOpen}
        activeSection={activeSection}
      />
      <div className="relative z-0 w-full p-2 lg:pt-2 lg:ml-menu-lg 2xl:ml-menu py:0 lg:px-8">
        <Header setStatus={setIsSideBarOpen}>
          {headerChildren}
          <UserThumb alt={!!user ? user?.fullName : ''} />
        </Header>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
        <Footer />
        <BtnUp />
      </div>
    </main>
  );
};

export default TransitionLayout;
