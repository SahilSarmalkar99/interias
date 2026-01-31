import React from 'react'
import Nav from '../components/Nav'
import Servicehero from '../components/Service/Servicehero'
import ContactSection from '../components/Home/ContactSection'
import Footer from '../components/Footer'
import ServiceInfo from '../components/Service/ServiceInfo'

const Services = () => {
  return (
    <div>
      <Nav />
      <Servicehero />
      <ServiceInfo />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Services