import React from 'react';
import ZodiacCard from './ZodiacCard';
import './ZodiacCardContainer.css';

const ZodiacCardContainer = () => {
  return (
    <section className="button-container">
      <h1 className="choose-sign">Choose Your Zodiac Sign</h1>
      <ZodiacCard />
    </section>
  );
};

export default ZodiacCardContainer;
