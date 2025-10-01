import React from 'react'
import Nav from '../Nav/Nav'
import HomePage from './HomePage'
import Footer from './Footer'
import Page2 from './Page2'
import Page3 from './Page3'

const Pages = () => {
  return (
    <div>
       <Nav/>
       <HomePage/> 
       <Page2/>
       <Page3/>
      <Footer/>
    </div>
  )
}

export default Pages
