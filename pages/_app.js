import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import { theme } from '../theme';

const SiteHead = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
);

const PageWrapper = ({ children, title }) => (
  <div className="container">
    <SiteHead title={title} />
    <main className="main">{children}</main>
  </div>
);

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const pathToTitle = {
    "/": "Planner"
  };

  return (
    <ChakraProvider theme={theme}>
      <Provider session={pageProps.session}>
        <PageWrapper title={pathToTitle[router.pathname]}>
          <Component {...pageProps} />
        </PageWrapper>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp