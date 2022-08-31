import React from 'react';
import { SubHeading } from '../../components';
import AwardCard from './AwardCard';
import { images, awards } from '../../constants';

import './Laurels.scss';

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {awards.map(({ title, subtitle, imgUrl }) => (
          <AwardCard
            key={title}
            title={title}
            subtitle={subtitle}
            img={imgUrl}
          />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
