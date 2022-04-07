import React from 'react';
import NextApp from 'next/app';
import SiteLayout from '../src/components/SiteLayout';

export default class App extends NextApp {
  static async getInitialProps(initProps) {
    const { Component, ctx } = initProps;
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    );
  }
}
