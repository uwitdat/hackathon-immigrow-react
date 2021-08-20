import React from 'react'
import { BsFillBellFill } from "react-icons/bs";
import './DetailsHeaderSecond.css'

const DetailsHeaderSecond = () => {
    return (
        <div className='UserDetails-header2nd'>
            <div className='flex-row'>
                <img style={{ height: '3rem' }} alt='logo' src='imigrow.png'></img>
                <h1 className="UserDetails-title">IMMIGROW</h1>
            </div>
            <div>
                <BsFillBellFill className='bell' />
            </div>
        </div>
    )
}

export default DetailsHeaderSecond