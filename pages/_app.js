import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;