import React from 'react'
import HeroFront from './Hero/HeroFront'
import HeroBack from './Hero/HeroBack'

function Hero() {
  return (
    <div className='relative h-screen w-full  outfit'>
      <HeroFront />
      <HeroBack/>
    </div>
  )
}

export default Hero