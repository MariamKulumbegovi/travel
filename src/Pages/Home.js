import React from 'react';
import '../App.css'
import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';

export const Home = () => {

  return(
    <>
        <HeroSection />
        <Cards/>
        <Footer/>
    </>
  )
};
