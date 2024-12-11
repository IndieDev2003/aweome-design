import React from 'react'
import NavSide from '../components/NavSide'
import RightNav from '../components/RightNav'
import Hero from '../components/Hero'

function Home() {
  return (
      <div className='oswald h-screen w-screen flex '>
          <RightNav/>
          <Hero/>
         <NavSide/>
    </div>
  )
}

export default Home