import React from 'react'
import Navbar from '../layout/Navbar'
import HeroSection from '../layout/HeroSection'
import InsuranceCardsSection from '../layout/InsuranceCardsSection'
import Quote from '../layout/Quote'
import ChooseUs from '../layout/ChooseUs'
import Footer from '../layout/Footer'

const Home = () => {
  return (
    <div>

        <Navbar/>
        <HeroSection/>
        <InsuranceCardsSection/>
        <Quote/>
        <ChooseUs/>
        <Footer/>
    </div>
  )
}

export default Home