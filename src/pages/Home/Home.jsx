 import React from 'react'
 import homeImg from "../../images/homePageVector.jpg"
 import "./Home.css"
import Common from '../../components/Common/Common'

const Home = (props) => {
  return (
    <>
    <Common
     text="Grow Your Business with "
      imgSrc = {homeImg}
       tagLine = "We are a team of talented Web Developer/Designers."
        btnText = "Get Started" 
        btnTo = "/services"/>
    </>
  )
}

export default Home
