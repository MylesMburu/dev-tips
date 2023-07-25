import { Feed } from '@components/Feed';
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>DevTips</h1>
        <p className='desc text-center'>
        Empower developers with a platform to share programming and hacking tips alonside latest industry trends, fostering a vibrant community of knowledge exchange and learning.
        </p>
        <Feed />

    </section>

  )
}

export default Home;