import React, { useState } from 'react'


const Counter = () => {
    let [counter, setCounter] = useState(0)

    const increaseHandler = () => {
        setCounter(++counter)

    }
    const decreaseHandler = () => {
        setCounter(--counter)

    }

    return (
        <>
            <div className="conter-screen" style={{ marginLeft: "20px" }}>{counter}</div>
            <div className="counter-btns">
                <button onClick={increaseHandler}>+</button>
                <button onClick={decreaseHandler}>-</button>
                <div>

                </div>
            </div>
        </>
    )
}

export default Counter