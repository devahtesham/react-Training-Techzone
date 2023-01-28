import React from 'react'
import "./heading.css"

const Heading = (props) => {
  let {course,id,name}=props.heading
  return (
    <>
      <h1 className='heading'>{course}</h1>
    </>
  )
}

export default Heading