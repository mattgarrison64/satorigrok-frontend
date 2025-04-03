import React from 'react';
import PropTypes from 'prop-types';

const HeroSmall = ({ heading, backgroundImage }) => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              {heading}
            </h3>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

HeroSmall.propTypes = {
  heading: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default HeroSmall;