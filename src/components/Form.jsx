import React, { useEffect, useState } from 'react'

const Form = () => {
    const [state, setState] = useState(false)
    let [value, setValue] = useState(0)
    useEffect(() => {
        console.log('USE EFFECT IS RUNNING')
    }, [value])

    return (
        <>
            <div>{value}</div>
            <button onClick={() => {
                console.log("NORMAL STATE IS CHANGING")
                setState(!state)
            }}>state change</button>
            <button onClick={() => {
                console.log("VALUE IS CHANGING")
                setValue(++value)
            }}>Value change</button>
        </>

    )
}

export default Form