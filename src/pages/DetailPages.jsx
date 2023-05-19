import React from 'react'
import Navbar from '../components/Navbar'
import Button from 'react-bootstrap/Button';



function DetailPages() {
  return (
    <div>
    <Navbar />
    
      <h1>
      Your streaming guide for movies, TV shows & sports
      </h1>

      <p>Find where to stream new, popular & upcoming entertainment with JustWatch.</p>

      <>
      <Button href="/">Discovery Movies & TV Show</Button> <Button type="submit">Features</Button>{' '}
    

    </>
    </div>
  )
}

export default DetailPages