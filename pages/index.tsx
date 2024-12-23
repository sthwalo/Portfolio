import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Immaculate Nyoni - Cybersecurity Professional</title>
        <meta name="description" content="Portfolio of Immaculate Nyoni - Cybersecurity Professional and Software Engineer specializing in secure system architecture and cryptography" />
        <meta name="keywords" content="cybersecurity, backend engineering, cryptography, secure systems, portfolio" />
        <meta name="author" content="Immaculate Nyoni" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        {/* Other components will be added here */}
      </main>
    </div>
  );
};

export default Home;
