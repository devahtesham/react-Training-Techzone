import React from 'react'

const NavBar = () => {
    return (
        <>
            <header className='d-flex justify-content-between align-items-center bg-warning px-3 py-2'>
                <div className="logo">
                    <h1 className='mb-0'>LOGO</h1>
                </div>
                <div className="navigation">
                    <ul className='mb-0 list-unstyled d-flex justify-content-between align-items-center bg-warning'>
                        <li className='me-3'>Home</li>
                        <li className='me-3'>About</li>
                        <li className='me-3'>Contact</li>
                    </ul>
                </div>
                <div className="total-cart">
                    <h3>Total Cart Items:- </h3>
                </div>
            </header>
        </>
    )
}

export default NavBar