/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import HeroSection from '../HeroSection';
import Footer from './Footer/Footer';
import {
  homeObjFour, homeObjOne, homeObjThree, homeObjTwo,
} from './HomePage/Data';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjTwo} />
      <Footer />
    </>
  );
}

export default Home;
