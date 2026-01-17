import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './nav/home.jsx'
import Contact from './nav/contact.jsx'
import NavBar from './navBar.jsx'
import './App.css'
import About from './nav/about.jsx'
import Service from './nav/services.jsx'
import Carousel from './chat.jsx'
import Skills from './mySkills.jsx'
import { useState } from 'react'
import WorkProcess from './workProcess.jsx'
import Project from './projects.jsx'
import Footer from './footer.jsx'

function App() {
  const [darkMode, setDarkMode] =useState(false)
  return (
 <div>
    
 
  
       <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    
      <Skills darkMode={darkMode}/>
      <WorkProcess darkMode={darkMode}/>
      <Service darkMode={darkMode}/>
   
    
      <About darkMode={darkMode}/>
     <Project darkMode={darkMode}/>
       <Contact darkMode={darkMode}/>
     <Footer darkMode={darkMode}/>

   </div>
  
  )

}

export default App
