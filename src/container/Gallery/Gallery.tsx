import React from 'react';

import { SubHeading } from '../../components';
import Slider from '../../components/Slider/Slider';

import './Gallery.scss';

const Gallery = () => {
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom__button">View More</button>
      </div>
      <Slider
        itemHeight={447}
        slidesToShow={3}
        slidesToScroll={1}
        marginRight={20}
        sliderContainerWidth={1000}
        prev="←"
        next="→"
      />
    </div>
  );
};

export default Gallery;
