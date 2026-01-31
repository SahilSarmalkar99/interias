import React from 'react'
import Nav from '../components/Nav'
import BlogsHero from '../components/Blogs/BlogsHero'
import BlogsInfo from '../components/Blogs/BlogsInfo'
import ContactSection from '../components/Home/ContactSection'
import Footer from '../components/Footer'

const Blogs = () => {
  return (
    <div>
      <Nav />
      <BlogsHero />
      <BlogsInfo />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Blogs