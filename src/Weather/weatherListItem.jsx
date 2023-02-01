import React, { memo } from 'react';
import PropTypes from 'prop-types';

function WeatherListItem({ item }) {
  console.log('Todo Item Render');
  return (
    <div className="flex items-center m-4">
        <div className="flex-1" key={item.cityName}>
          <p
            className='flex-1 px-4 text-[20px] font-bold mb-[20px'
          >
            <span className="text-teal-500">City Name:</span> {item.cityName}
          </p>
          <p
            className='flex-1 px-4 text-[20px] font-bold'
          >
            <span className="text-teal-500">Temperature:</span> {item.temp} {item.tempType === 'C' ? 'Celsius' : 'Fahrenheit'}
          </p>
        </div>
    </div>
  );
}

WeatherListItem.propTypes = {
  item: PropTypes.exact({
    cityName: PropTypes.string,
    temp: PropTypes.number,
    tempType: PropTypes.string
  }).isRequired,
};

export default memo(WeatherListItem);
