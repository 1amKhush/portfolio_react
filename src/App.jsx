import { useState } from 'react'
import styles from './App.module.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


function App() {
  

  return (
    <>
      <div className={styles.App}>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
