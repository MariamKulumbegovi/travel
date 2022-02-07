import React from 'react';
import video from '../video/video-1.mp4'
import { Button } from './Button';
import './HeroSection.css'
import '../App.css'
export const HeroSection = () => {
  return (
      <div className='hero-container'>
          {/* <video src={video}  autoPlay loop muted/> */}
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
          <div className="hero-btns">
            <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            >
            GET STARTED
            </Button>
            <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            >
            WATCH TRAILER <i className="far fa-play-circle"></i>
            </Button>
          </div>
      </div>
  )
};
