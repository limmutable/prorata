import Head from 'next/head'
import HomePage from '@/components/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>임정민 - PRORATA</title>
        <meta name="description" content="Sharing new ideas, Inspiring innovative founders, Building something useful" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HomePage />
    </>
  )
}