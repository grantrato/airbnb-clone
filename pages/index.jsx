import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className=''>
      <Head>
        <title>AirBnb - GranTrato</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
    </div>
  )
}

export default Home
