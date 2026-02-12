import React from 'react'
import Nav from '../components/Nav'
import ProjectHero from '../components/Projects/ProjectHero'
import ProjectInfo from '../components/Projects/ProjectInfo'
import ContactSection from '../components/Home/ContactSection'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div className='bg-[#F5F1EA]'> 
      <Nav />
      <ProjectHero />
      <ProjectInfo />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Projects