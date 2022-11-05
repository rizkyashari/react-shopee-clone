import React from 'react'
import CarouselSection from '../components/home-components/Carousel'
import Header from '../components/home-components/Header'
import LowerSection from '../components/home-components/LowerSection'
import MiddleSection from '../components/home-components/MiddleSection'
import UpperSection from '../components/home-components/UpperSection'

function Home() {
  return (
    <div>
      <Header/>
      <CarouselSection />
      <UpperSection />
      <MiddleSection />
      <LowerSection />
    </div>
  )
}

export default Home