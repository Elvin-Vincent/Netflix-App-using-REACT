import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>MONEY HEIST</h1>
            <div className='banner_button'>
                <button className='button'>play</button>
                <button className='button'>Mylist</button>
            </div>
            <p className='discription'>MONEY HEIST (known in Spanish as La casa de papel) Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan</p>
        </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
