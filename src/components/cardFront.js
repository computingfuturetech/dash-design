import React from 'react'
import "../assets/css/cardFront.css";
import cardLogo from '../assets/images/Circles.png'

export default function CardFront() {
  return (
    <div className='card-container'>
        <div className="card-logo">
            <h1>Vision UI</h1>
            <img src={cardLogo} alt="logo" />
        </div>

        <div className="other-info">
            <div className="card-number">
                <h1>7812 2139 0823 XXXX</h1>
            </div>
            <div className="security">
                <div className="validity">
                    <h3>
                        VALID THRU
                    </h3>
                    <h1>
                        05/24
                    </h1>
                </div>
                <div className="cvv">
                    <h3>
                        CVV
                    </h3>
                    <h1>
                        09X
                    </h1>
                </div>
            </div>
        </div>
      
    </div>
  )
}
