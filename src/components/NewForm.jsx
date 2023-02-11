import React from 'react'
import { useState } from 'react'

const NewForm = () => {
    const [value, setValue] = useState(false)

    const [emailVal, setEmailval] = useState("")
    const [passwordVal, setPasswordval] = useState("")

    const emailHandler = (e) => {
        let emailText = e.target.value
        setEmailval(emailText)
    }
    const passwordHandler = (e) => {
        let passwordText = e.target.value
        setPasswordval(passwordText)
    }


    const submitHandler = (e) => {
        e.preventDefault()

        // if (!emailVal || !passwordVal || !emailVal && !passwordVal) {
        //     console.log("email and password is empty !!")
        //     return
        // }


        console.log("User Email:- ", emailVal);
        console.log("User Password:- ", passwordVal);
        console.log("Form is submitted !!!")
        setEmailval("")
        setPasswordval("")
    }

    return (
        <>
            <div className="container mt-5">
                <form onSubmit={submitHandler}>
                    <div className=" w-50 m-auto">
                        <div className="email mb-3">
                            <input type="email" className="form-control" placeholder='Email' onChange={emailHandler} value={emailVal} />
                        </div>
                        <div className="password">
                            <input type="password" className="form-control" placeholder='password' onChange={passwordHandler} value={passwordVal} />
                        </div>
                        <div className='mt-3 text-center'>
                            <button className='btn btn-warning' type='submit'>Submit</button>
                        </div>

                    </div>
                </form>
                <button class="btn btn-danger" onClick={() => {
                    setValue(!value)

                }}>Toggle</button>
                {
                    value && <h1>the value is true</h1>
                }
            </div>
        </>
    )
}

export default NewForm