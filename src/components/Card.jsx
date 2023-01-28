import React, { useState } from 'react'
import Counter from './Counter.jsx';

const Card = () => {
    // let title = "learning JS"
    // const [myTitle, setMyTitle] = useState(title);
    // const clickHandler = () => {
    //     // console.log("click occur")
    //     // title = "Learning React"
    //     // console.log(title);
    //     // setMyTitle("Learning ReactJS")
    // }
    return (
        <>
            {/* <div>{myTitle}</div>
            <button onClick={clickHandler}>Click me !</button> */}
            <Counter />
        </>
    )
}

export default Card