import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import PricingCards from '../components/Pricing'

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <Hero heading='PRICING.' text='Choose your trip.'/>
        <PricingCards/>
        <Footer/>
    </div>
  )
}

export default Pricing
