import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {
  const [inputdata,setinputdata] = useState({
    fullname:"",
    phone:"",
    email:"",
    message:""
  })
  let dataHandler = (event) =>{
    setinputdata({...inputdata,[event.target.name]:event.target.value})
    console.log(inputdata)
    }

  let submitForm = (e) =>{
    e.preventDefault()
    alert(`form submitted Successfull by ${inputdata.fullname} `)
    setinputdata({
      fullname:"",
      phone:"",
      email:"",
      message:""
    })
  }
  return (
    <>
    <div className="tab-center mt-3">
      <h2 className='text-center headingOS'>Contact Us</h2>
    </div>
    <div className="formWrapper">
    <form onSubmit={submitForm}>
  <div className="mb-3 formDiv">
    <label HtmlFor="exampleInputEmail1" className="form-label">Full Name</label>
    <input type="text" name='fullname' value={inputdata.fullname} onChange={dataHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 formDiv">
    <label HtmlFor="exampleInputPassword1" className="form-label">Phone No</label>
    <input type="text" name='phone' value={inputdata.phone} onChange={dataHandler} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 formDiv">
    <label HtmlFor="exampleInputPassword1" className="form-label">Email Address</label>
    <input type="email" name='email' value={inputdata.email} onChange={dataHandler} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className='mb-3 formDiv'>
  <label HtmlFor="floatingTextarea">Message</label>
  <textarea name='message' value={inputdata.message} onChange={dataHandler} className="form-control mt-2" placeholder="Leave a message here" id="floatingTextarea"></textarea>
  </div>
  
  

  <div className="formDiv">
  <button type="submit" className="btn btn-outline-primary mt-3">Submit</button>
  </div>
  
</form>
    </div>
    </>
  )
}

export default Contact
