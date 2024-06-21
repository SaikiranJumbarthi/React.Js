import React from 'react'

const FirstComp = (props) => {
    console.log(props)
  return (
    <div>FirstComp
        {/* <h1>Saikiran</h1>
        <h2>Jumbarthi</h2> */}
        <h1>{props.name}</h1>
    </div>
  )
}

export default FirstComp