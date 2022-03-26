import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/common/Layout/Nav'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <title>니콘내콘</title>
    </Head>
    <Nav/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
