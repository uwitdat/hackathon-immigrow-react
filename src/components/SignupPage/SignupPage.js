import React from 'react'
import { Link } from 'react-router-dom'
import './SignupPage.css'


const SignupPage = () => {
    return (
        <div className='Signup-container'>
            <div className='immigrow-logo'>
                <img style={{ height: '8rem' }} alt='logo' src='imigrow.png'></img>
            </div>
            <h1 className='Signup-title'>IMMIGROW</h1>
            <p className='can'>Canada</p>
            <div className='Signup-text'>
                <p>Making your transition to Canada easier with mentorship, community events and more.</p>

            </div>
            <p className='lan-select'>Select your language</p>
            <div className='Signup-lan-container'>
                <div id="google_translate_element"></div>
            </div>
            <Link to='/signup'>
                <button className='Login-btn'>Get Started</button>
            </Link>

        </div>
    )
}

export default SignupPage
