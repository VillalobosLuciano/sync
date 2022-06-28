import 'styles/main.css';
import 'styles/chrome-bug.css';
import { useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import Layout from 'components/Layout';
import { UserProvider } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { AppProps } from 'next/app';
import { MyUserContextProvider } from 'utils/useUser';
import ScrollObserver from 'context/scroll-observer';
import { useRouter } from 'next/router';
import { GetStartedLayout } from '../components/GetStartedLayout';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <div className="bg-black">
      <UserProvider supabaseClient={supabaseClient}>
        <MyUserContextProvider supabaseClient={supabaseClient}>
          <ScrollObserver>
            {pathname !== '/get-started' ? (
              <Layout>
                <motion.div
                  key={router.route}
                  initial="pageInitial"
                  animate="pageAnimate"
                  variants={{
                    pageInitial: {
                      opacity: 0
                    },
                    pageAnimate: {
                      opacity: 1
                    }
                  }}
                >
                  <Component {...pageProps} />
                </motion.div>
              </Layout>
            ) : (
              <motion.div
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                variants={{
                  pageInitial: {
                    opacity: 0
                  },
                  pageAnimate: {
                    opacity: 1
                  }
                }}
              >
                <GetStartedLayout>
                  <Component {...pageProps} />
                </GetStartedLayout>
              </motion.div>
            )}
          </ScrollObserver>
        </MyUserContextProvider>
      </UserProvider>
    </div>
  );
}
