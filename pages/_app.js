import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import splitbee from '@splitbee/web';

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  splitbee.init();
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
