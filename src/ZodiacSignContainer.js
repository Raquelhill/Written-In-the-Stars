import React from 'react';
import ZodiacCard from './ZodiacCard';
import './ZodiacSignContainer.css';

const ZodiacSignContainer = () => {
  return (
    <section className="button-container">
      <h1 className="choose-sign">Choose Your Zodiac Sign</h1>
      <ZodiacCard />
    </section>
  );
};

export default ZodiacSignContainer;
