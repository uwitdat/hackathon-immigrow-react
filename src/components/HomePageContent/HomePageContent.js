import React from 'react'
import './HomePageContent.css'


const HomePageContent = ({ dateone, imgone, datetwo, imgtwo, imgthree, datethree, btntxt }) => {
    return (

        <div className='content'>

            <div className='col'>
                <div className='content-one'>
                    <img style={{ width: '100%', height: '40%', objectFit: 'cover', overflow: 'auto' }} src={imgone} alt='group'></img>
                    <h3>{dateone}</h3>
                    <p>Finding a sense of community <br />upon arrival</p>
                </div>
                <div className='content-two'>
                    <button className='content-btn'>{btntxt}</button>
                </div>
            </div>
            <div className='col'>
                <div className='content-one'>
                    <img style={{ width: '100%', height: '40%', objectFit: 'cover', overflow: 'auto' }} src={imgtwo} alt='group'></img>
                    <h3>{datetwo}</h3>
                    <p>Finding a sense of community <br />upon arrival</p>
                </div>
                <div className='content-two'>
                    <button className='content-btn'>{btntxt}</button>
                </div>
            </div>
            <div className='col'>
                <div className='content-one'>
                    <img style={{ width: '100%', height: '40%', objectFit: 'cover', overflow: 'auto' }} src={imgthree} alt='group'></img>
                    <h3>{datethree}</h3>
                    <p>Finding a sense of community <br />upon arrival</p>
                </div>
                <div className='content-two'>
                    <button className='content-btn'>{btntxt}</button>
                </div>
            </div>

        </div>

    )
}

export default HomePageContent
