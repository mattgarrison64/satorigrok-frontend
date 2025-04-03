import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar'; // Adjust path if needed

const HeroSectionWithSearch = ({ heading, description, backgroundImage }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  const tabs = [
    { id: "buy-home", label: "Buy" },
    { id: "rent-home", label: "Rent" },
  ];

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
          <div className="flex flex-col items-center">
            <ul
              className="inline-block mx-auto sm:w-fit w-full flex-wrap justify-center text-center p-4 bg-white dark:bg-slate-900 rounded-t-xl border-b dark:border-gray-800"
              id="myTab"
              data-tabs-toggle="#StarterContent"
              role="tablist"
            >
              {tabs.map((tab, index) => (
                <li key={tab.id} role="presentation" className="inline-block">
                  <button
                    onClick={() => handleTabClick(index)}
                    className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${
                      activeTabIndex === index ? 'text-white bg-green-600' : 'hover:text-green-600'
                    }`}
                    id={`${tab.id}-tab`}
                    data-tabs-target={`#${tab.id}`}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={activeTabIndex === index}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
            <SearchBar activeTabIndex={activeTabIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSectionWithSearch.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default HeroSectionWithSearch;