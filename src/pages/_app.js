import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StoreProvider } from 'easy-peasy';

import withReduxStore from '../utils/with-redux-store';
import theme, { GlobalStyle } from '../utils/theme';
import config from '../utils/config';





class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <StoreProvider store={reduxStore}>
          <>
            <Head>
              <title>{config.siteName}</title>
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"

              />


              <link rel="preconnect"
                href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;1,200;1,600&display=swap" rel="stylesheet"/>



            </Head>
            <Component {...pageProps} />
            <GlobalStyle />
          </>
        </StoreProvider>
      </ThemeProvider>
    );
  }
}

export default withReduxStore(MyApp);
