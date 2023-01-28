import React from 'react'
import { useRef } from 'react'

const UseRefExample = () => {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Form submitted successfully");
        console.log("emailRef", emailRef.current.value)
        console.log("emailRef", passwordRef.current.value)
        emailRef.current.value = ""
        passwordRef.current.value = ""
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 mt-5">
                        <div className="card bg-white">
                            <form onSubmit={submitHandler} >
                                <input type="email" placeholder='Enter your email' className='form-control mb-3' id='email' ref={emailRef} />
                                <input type="password" placeholder='Enter your password' className='form-control mb-3' id='password' ref={passwordRef} />
                                <button className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseRefExample