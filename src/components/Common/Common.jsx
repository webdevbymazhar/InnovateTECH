import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Common.css"

const Common = (props) => {
  return (
   <>
   <section id='header' className='d-flex align-items-center '>
     <div className="container-fluid nav_bg">
        <div className='row'>
            <div className='col-10 mx-auto'>
            <div className="row">
              <div className='col-md-6 mt-5 pt-lg-0 order-2 order-lg-0 d-flex justify-content-center flex-column'>
                

                <h1>{props.text} <strong className='text-primary'>InnovateTECH</strong></h1>
                <h4 className='my-2 fs-5'>{props.tagLine}</h4>
                <div className='mt-3'>
                  <NavLink to={props.btnTo} className='btn btn-outline-primary'>{props.btnText}</NavLink>
                </div>
                
              </div>

              <div className='col-lg-6 order-1 order-lg-2 header-img mt-4'>
                <img src={props.imgSrc} alt='home-img' className='img-fluid animated' />
              </div>
              </div>

              

            </div>
            </div>
            </div>
            </section>
   </>
  )
}

export default Common
