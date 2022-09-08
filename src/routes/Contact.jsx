import React from 'react'
import ContactUs from '../components/contact/Contectus'
import Navbar from '../components/Navbar/Navbar'


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div 
      className='bgGradient'
      >
       <ContactUs/>
      </div>
     
    
    </div>
  )
}

export default Contact