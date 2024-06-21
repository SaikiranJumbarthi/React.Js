import React, { useState } from 'react'
import './FormExample.css'

const FormExample = () => {

    const[userName, setUserName] = useState("")
    
    const[newUserDetails, setNewUserdetails] = useState() 

    const getUserName = (event) => {
        // console.log(event.target.value);
        setUserName(event.target.value)
    }
    const userDetails = (e) =>{
        e.preventDefault()
        setNewUserdetails(userName)

    }

  return (
    <div className='formSection'>
     <h2>Hello,{newUserDetails}</h2>
    <div className='inputForm'>
        <form onSubmit={userDetails}>
        <input  type="text"  placeholder='Enter your input' onChange={getUserName}/>
        <br />
        <button className='submitButton' /* onClick={userDetails} */>Submit</button>
    </form>
    </div>
    </div>

  )
}

export default FormExample