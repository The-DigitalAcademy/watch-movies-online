import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import { Card } from 'react-bootstrap'


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Card />

    </div>
  )
}

export default HomePage