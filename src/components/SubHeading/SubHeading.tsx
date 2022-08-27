import React from 'react';
import spoon from '../../assets/spoon.svg';

interface ISubHeading {
  title: string;
}

const SubHeading = ({ title }: ISubHeading) => (
  <div style={{ marginBottom: 'rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
