import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import Blogs from './pages/Blogs.jsx'
import Contact from './pages/Contact.jsx'
import {Routes ,Route} from "react-router-dom"
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  return (
    <div >
      <FloatingWhatsApp />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/project/:id" element={<ProjectDetails />} />

      </Routes>
    </div>
  )
}

export default App