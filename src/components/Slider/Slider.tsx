import React, { useEffect, useState } from 'react';
import { images } from '../../constants';
const { gallery01, gallery02, gallery03, gallery04 } = images;
const imagesArr = [gallery01, gallery02, gallery03, gallery04];
import './Slider.scss';

interface ISlider {
  itemHeight: number;
  slidesToShow: number;
  slidesToScroll: number;
  marginRight: number;
  sliderContainerWidth: number;
  prev: string;
  next: string;
}

const Slider = ({
  itemHeight,
  slidesToShow,
  slidesToScroll,
  marginRight,
  sliderContainerWidth,
  prev,
  next
}: ISlider) => {
  const [position, setPosition] = useState(0);
  const [prevIsDisabled, setPrevIsDisable] = useState(true);
  const [nextIsDisabled, setNextIsDisable] = useState(false);

  if (window.innerWidth > 1400) {
    sliderContainerWidth = 1000;
  } else if (window.innerWidth > 650) {
    sliderContainerWidth = 600;
    slidesToShow = 2;
  } else {
    sliderContainerWidth = 300;
    slidesToShow = 1;
  }

  const sliderIndents = slidesToShow - 1;
  const sliderItemsCount: number = imagesArr.length;
  const itemWidth =
    (sliderContainerWidth - sliderIndents * marginRight) / slidesToShow;
  const itemWidthWithMargin = itemWidth + marginRight;
  const movePosition = slidesToScroll * itemWidthWithMargin;

  useEffect(() => {
    position <= -(sliderItemsCount - slidesToShow) * itemWidthWithMargin
      ? setNextIsDisable(true)
      : setNextIsDisable(false);
    position === 0 ? setPrevIsDisable(true) : setPrevIsDisable(false);
  }, [position]);

  const handleNextClick = () => {
    const sliderItemsLeft: number =
      sliderItemsCount -
      (Math.abs(position) + slidesToShow * itemWidthWithMargin) /
        itemWidthWithMargin;

    setPosition(
      sliderItemsLeft >= slidesToScroll
        ? position - movePosition
        : position - sliderItemsLeft * itemWidthWithMargin
    );
  };

  const handlePrevClick = () => {
    const sliderItemsLeft: number = Math.abs(position) / itemWidthWithMargin;

    setPosition(
      sliderItemsLeft >= slidesToScroll
        ? position + movePosition
        : position + sliderItemsLeft * itemWidthWithMargin
    );
  };

  return (
    <>
      <div
        className="slider__container"
        style={{ width: sliderContainerWidth }}
      >
        <div
          className="slider__track"
          style={{ transform: `translateX(${position}px)` }}
        >
          {imagesArr.map((image, index) => (
            <div
              key={index}
              className="slider__item"
              style={{
                height: itemHeight,
                minWidth: itemWidth,
                marginRight: marginRight
              }}
            >
              <img src={image} alt="slider__image" />
            </div>
          ))}
        </div>
        <div className="slider__buttons">
          <button
            onClick={handlePrevClick}
            disabled={prevIsDisabled}
            className="btn-prev"
          >
            {prev}
          </button>
          <button
            onClick={handleNextClick}
            disabled={nextIsDisabled}
            className="btn-next"
          >
            {next}
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
