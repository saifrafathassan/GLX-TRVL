import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import TrainingSection from '../components/Training'

const Training = () => {
  return (
    <div>
        <Navbar/>
        <Hero heading='TRAINING' text='Pre-Flight & In-Flight Training'/>
        <TrainingSection/>
        <Footer/>
    </div>
  )
}

export default Training
