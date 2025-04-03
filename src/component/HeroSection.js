import React from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({ heading, description, backgroundImage }) => {
  return (
    <section className="relative table w-full py-36 lg:py-44 overflow-hidden zoom-image">
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"
      ></div>
      <div className="absolute inset-0 bg-black/70 z-2"></div>
      <div className="container z-3">
        <div className="grid grid-cols-1 mt-10">
          <div className="text-center">
            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
              {heading}
            </h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default HeroSection;