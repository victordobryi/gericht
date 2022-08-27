import React from 'react';

interface IAwardCard {
  title: string;
  subtitle: string;
  img: string;
}

const AwardCard = ({ title, subtitle, img }: IAwardCard) => {
  return (
    <div className="app__laurels_awards-card">
      <img src={img} alt="award" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>
          {title}
        </p>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  );
};

export default AwardCard;
