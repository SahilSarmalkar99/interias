import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Home/Hero'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-[#F5F1EA]'>
        <Nav />
        <Hero />
        <Footer />
    </div>
  )
}

export default Home