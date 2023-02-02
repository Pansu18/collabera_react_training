import React, { memo } from 'react';
import WeatherListItem from './weatherListItem';
import PropTypes from 'prop-types';
import { WeatherContext } from '../context/weatherContext';

function WeatherInfo() {
  return (
    <WeatherContext.Consumer>
      {({ weatherList }) => (
        <div className="w-full flex-1 mt-[30px] mb-[30px] shadow-lg bg-white">
          {weatherList.map(item => (
            <WeatherListItem
              key={item.cityName}
              item={item}
            />
          ))}
        </div>
      )}
    </WeatherContext.Consumer>
    // <div className="w-full flex-1 mt-[30px] mb-[30px] shadow-lg bg-white">
    //   {weatherList.map(item => (
    //     <WeatherListItem
    //       key={item.cityName}
    //       item={item}
    //     />
    //   ))}
    // </div>
  );
}

// WeatherInfo.propTypes = {
//   weatherList: PropTypes.arrayOf(
//     PropTypes.exact({
//       cityName: PropTypes.string,
//       temp: PropTypes.number,
//       tempType: PropTypes.string
//     }),
//   ).isRequired,
// };

export default memo(WeatherInfo);
