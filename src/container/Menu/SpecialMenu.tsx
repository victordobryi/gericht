import React from 'react';
import { MenuItem, SubHeading } from '../../components';

import './SpecialMenu.scss';
import { wines, cocktails, awards } from '../../constants/data';
import images from '../../constants/images';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine &#39; Beer</p>
        <div className="app__specialMenu-menu_items">
          {wines.map(({ title, price, tags }, index) => (
            <MenuItem
              key={title + index}
              title={title}
              price={price}
              tags={tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {cocktails.map(({ title, price, tags }, index) => (
            <MenuItem
              key={title + index}
              title={title}
              price={price}
              tags={tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
