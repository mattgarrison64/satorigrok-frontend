import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const CounterSection = ({ backgroundImage, counters }) => {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="relative py-24 bg-no-repeat bg-center bg-fixed bg-cover"
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
          <div className="lg:col-start-2 lg:col-span-10">
            <div className="grid md:grid-cols-3 grid-cols-1 items-center">
              {counters.map((item, index) => (
                <div className="counter-box text-center" key={index}>
                  <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                    <CountUp
                      start={0}
                      className="counter-value"
                      end={item.target}
                      duration={2.75}
                    />+
                  </h1>
                  <h5 className="counter-head text-white text-lg font-medium">{item.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CounterSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      target: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CounterSection;