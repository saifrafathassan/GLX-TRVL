import React from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

const Pricing = () => {
  return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3> Basic </h3>
                    <span className='bar'></span>
                    <p className='btc'>1 BTC</p>
                    <p> 3 Days </p>
                    <p> 20 Views </p>
                    <p>  Featured </p>
                    <p> Private Quarters </p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3> Suite </h3>
                    <span className='bar'></span>
                    <p className='btc'>9 BTC</p>
                    <p> 7 Days </p>
                    <p> 50 Views </p>
                    <p> Featured </p>
                    <p> Private Quarters </p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3> Executive </h3>
                    <span className='bar'></span>
                    <p className='btc'>12 BTC</p>
                    <p> 10 Days </p>
                    <p> 70 Views </p>
                    <p> Featured </p>
                    <p> Private Quarters </p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
            </div>
        </div>
  )
}

export default Pricing
