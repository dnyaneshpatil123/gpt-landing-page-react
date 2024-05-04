import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>In a world where the horizon of possibility stretches far beyond the confines of imagination, the canvas of existence becomes a tapestry woven with endless threads of potential. Boundaries blur and constraints dissolve, inviting exploration into realms yet undiscovered and innovations yet unrealized. </p>
    </div>
  </div>
);

export default Possibility;
