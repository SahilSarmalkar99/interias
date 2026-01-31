import React from 'react'
import Nav from '../components/Nav'
import ContactHero from '../components/Contact/ContactHero'
import ContactInfo from '../components/Contact/ContactInfo'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Nav />
      <ContactHero />
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default Contact