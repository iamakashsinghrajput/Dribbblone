import React, { useState } from 'react'
import './Hero.css'
import Search from '../assets/search.png';

const Hero = () => {

  function changeHandler(event){
    console.log(event.target.value)
  }

  return (
    <div className='hero'>
        <div className='hero_heading'>
          <h1 className='first_hero'>
                Discover the world's
          </h1>
          <h1 className='second_hero'>
              top desginers
          </h1>
        </div>
        <div className='hero_subtitile'>
          <h2 className='first_subtitle'>
            Explore work from the most talented and accomplished designers 
          </h2>
          <h2 className='second_subtitle'>
            ready to take on your next project
          </h2>
        </div>
        <div className='herosearch'>
          <input name='myInput'placeholder='What are you looking for?' type='string' className='inputPattern' onChange={changeHandler}/>
          <div className='shotsdiv'>
            <p className='inputshots'>Shots</p>
            <img src='https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png' className='inputimg'></img>
            <img src={Search} className='inputimg2'/>
          </div>
        </div>
        <div className='items'>
          <div className='items-text'>
            Trending searches
          </div>
          <div className='items-button'>
            <button className='btn'>landing page</button>
            <button className='btn'>e-commerce</button>
            <button className='btn'>mobile app</button>
            <button className='btn'>logo design</button>
            <button className='btn'>dashboard</button>
            <button className='btn-icons'>icons</button>
          </div>
        </div>
    </div>
  )
}

export default Hero
