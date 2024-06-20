// import React,{useState} from 'react';
// import './FormContext.css'





// const FormContext = () => {

//  const[userName, setUserName] = useState("")

//  const getUserName =(event) => {
//     setUserName(event.target.value)
//     //    console.log(event.target.value)
//  }

// return (
//     <section className='formSection'>
//     <h2>Hello,{userName}</h2>
//         <div className='inputDiv'>
//             <input type="text" placeholder="Enter Your name:" onChange={getUserName}/>
//             <br/>
//             <button className="Submit">Submit</button>
//         </div>
//     </section>
//     )
// }

// export default FormContext
import React,{useState} from 'react'
import './FormContext.css';


const FormContext = () => {

    const [userName, setUserName] = useState(" ")
    const[newUserDetails, setNewUserDetails] = useState()

    const getUserName=(event) =>{
        setUserName(event.target.value);
    }
      
  const userDetails = (e) => { 
    e.preventDefault() //page will not refresh and content also display on the screen 
    setNewUserDetails(userName);
  }




    return (
    <section className='formSection'>
        <h2>hello,{newUserDetails}</h2>
    <div className='inputDiv'>
        {/* <input type="text" placeholder='Enter your Name:' onChange={getUserName}/>
        <br />
        <button className='Submit' onClick={ userDetails } >Submit</button> */}
        <form onSubmit={userDetails}>
        <input type="text" placeholder='Enter your Name:' onChange={getUserName}/>
        <br />
        <button className='Submit'/* onClick={ userDetails } */ type='submit' >Submit</button>
            </form>   

    </div>
    </section>
  )
}

export default FormContext