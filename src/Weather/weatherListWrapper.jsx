import React, { memo } from 'react'
import WeatherList from './weatherInfo'
import { WeatherContext } from '../context/weatherContext'

const weatherListWrapper = () => {
  return (
    <WeatherContext.Consumer>
        {({ clearWeather, viewList, weatherList }) => (
            <div className='w-full flex justify-center overflow-y-auto'>
                {viewList && (
                    <div className="todo__weather_container">
                        {weatherList.length === 0 ? (
                            <div className="todo__error">
                                <p className='flex-1 px-4 text-[20px] font-bold'>No Data Available</p>
                            </div>
                        ) : (
                            <WeatherList weatherList={weatherList}/>
                        )}
                            
                        <button type="button" className="todo_form__btn mb-[20px]" onClick={clearWeather}>Clear Data</button>
                    </div>
                )}
            </div>
        )}
    </WeatherContext.Consumer>
  )
}

export default memo(weatherListWrapper)