import React from 'react'
import Common from '../../components/Common/Common'
import aboutImg from "../../images/contact us.jpg"

const AboutUs = () => {
  return (
    <>
    <Common
     text="Welcome To Our About Page"
      imgSrc = {aboutImg}
       tagLine = "We are a team of talented Web Developer/Designers."
        btnText = "Contact Us" 
        btnTo = "/contact"/>
    </>
  )
}

export default AboutUs
