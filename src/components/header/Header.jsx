import React from 'react'
import './header.css'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className='header'>
            {/* <nav> */}
            <div className='title'>
                <span> Header </span>
            </div>
            <div className='links'>
                <div>
                    <Link to='/'> home </Link>
                </div>
                <div>
                    <Link to='/about'> about </Link>
                </div>
            </div>
            {/* </nav> */}
        </div>
    )
}

export default Header
