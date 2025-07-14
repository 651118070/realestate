import React from 'react'
import { Main } from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Testimonies from './components/Testimonies'
import Footer from './components/Footer'
import Contact from './components/Contact'
export default function App() {
  return (
    <div className='flex flex-col '>
     
     <Main/>
     <About/>
     <Projects/>
     <Testimonies/>
     <Contact/>
     <Footer/>
    </div>
  )
}
