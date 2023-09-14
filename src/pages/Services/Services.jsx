import React from 'react'
import Card from '../../components/Card/Card'
import "./Services.css"
import WebDev from "../../images/webDev.jpg"
import cyber from "../../images/cber.avif"
import AppDev from "../../images/AppDev.avif"
import amazon from "../../images/amazon.avif"
import graphic from "../../images/GraphicDesign.avif"
import ecommerce from "../../images/ecommerce.avif"


const Services = () => {
  return (

    <>

    <div className="tab-center mt-5 mb-3">
      <h2 className='text-center'>Our Services</h2>
    </div>
    
    <div className="container-fluid">
        <div className='row'>
            <div className='wrapper'>
              <Card text = "Web Development" imgSrc = {WebDev} />
              <Card text = "App Development" imgSrc = {AppDev}/>
              <Card text = "Social Media Ads" imgSrc = {ecommerce}/>
              <Card text = "Graphic Design" imgSrc = {graphic}/>
              <Card text = "Ecommerce" imgSrc = {amazon}/>
              <Card text = "Cyber Security" imgSrc = {cyber}/>
              </div>
              </div>
              </div>
              </>
              

  )
}

export default Services
