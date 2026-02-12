import React from 'react'
import Nav from '../components/Nav'
import ContactHero from '../components/Contact/ContactHero'
import ContactInfo from '../components/Contact/ContactInfo'
import Map from '../components/Contact/Map'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className=''>
      <Nav />
      <ContactHero />
      <ContactInfo />
      <Map />
      <Footer />
    </div>
  )
}

export default Contact