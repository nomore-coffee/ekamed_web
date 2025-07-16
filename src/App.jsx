import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Navbar, Hero, PricingCards, FeaturedProducts, GetStarted, ResourcesSupport, SuccessStories, Footer } from './Componnets/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero />
    <PricingCards/>
    <FeaturedProducts />
    <GetStarted/>
    <ResourcesSupport />
    <SuccessStories />
    <Footer />
      
    </>
  )
}

export default App
