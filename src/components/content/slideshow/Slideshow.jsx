import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './Slideshow.scss';

const Slideshow = (props) => {
  const { images, autoSlide } = props;
  // set the state for the image, starting from the default slide image & index
  const [imageState, setImageState] = useState({
    slideImage: images[0],
    slideIndex: 0
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // to immediately display the first image to the slideshow as the data arrive from the API
    setImageState({
      ...imageState,
      slideIndex: currentIndex,
      slideImage: images[currentIndex]
    });

    if (autoSlide) {
      let index = currentIndex;

      const slider = setInterval(() => {
        if (currentIndex === images.length - 1) {
          index = 0;
        } else {
          index++;
        }

        setCurrentIndex(index);
        setImageState((prevState) => ({
          ...prevState,
          slideImage: images[index],
          slideIndex: index
        }));
      }, 3000);

      return () => clearInterval(slider);
    }
  }, [currentIndex, images]);

  const { slideImage, slideIndex } = imageState;
  // const currentSlideIndex = 0;

  const moveSlider = (type) => {
    let index = currentIndex;

    if (type === 'prev') {
      if (currentIndex <= 0) {
        index = images.length - 1;
      } else {
        index--;
      }
    }

    if (type === 'next') {
      if (currentIndex === images.length - 1) {
        index = 0;
      } else {
        index++;
      }
    }

    setCurrentIndex(index);

    setImageState((prevState) => ({
      ...prevState,
      slideImage: images[index],
      slideIndex: index
    }));
  };

  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div
          className="slider-arrow slider-arrow--left"
          onClick={() => moveSlider('prev')}
        >
          <AiOutlineLeft />
        </div>

        <div
          className="slider-arrow slider-arrow--right"
          onClick={() => moveSlider('next')}
        >
          <AiOutlineRight />
        </div>
      </div>
    );
  };

  const Indicators = (props) => {
    // const { currentSlide } = props;
    const listIndicators = images.map((img, idx) => {
      const btnClasses =
        idx === props.currentSlide
          ? 'slider-navButton slider-navButton--active'
          : 'slider-navButton';

      return <button className={btnClasses} key={idx}></button>;
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  return (
    <div className="slider">
      <div className="slider-slides">
        {images && images.length > 0 && slideImage && (
          <div
            className="slider-image"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${slideImage.image})`
            }}
          ></div>
        )}
      </div>
      {autoSlide && <RenderArrows />}

      <Indicators currentSlide={slideIndex} />
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.array.isRequired,
  autoSlide: PropTypes.bool.isRequired,
  currentSlide: PropTypes.number
};

export default Slideshow;
