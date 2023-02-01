import React, { PureComponent, createRef } from 'react';
import './weather.css';
import WeatherForm from './weatherForm';
import WeatherList from './weatherInfo';

export default class Weather extends PureComponent {
  state = {
    weatherList: [],
    viewList: false,
    error: null,
  };

  weatherText = createRef();

  loadWeather = async(event) => {
    try {
      event.preventDefault();
      const weatherText = this.weatherText.current.value;
      let url = 'http://localhost:3000/weatherList';
      url += `?cityName=${weatherText}`

      const res = await fetch(url);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json);
      }

      this.setState({ weatherList: json, viewList: true });

      if(json.length === 0) {
        return this.setState({error: 'No Data Available'})
      } else {
        return this.setState({ error: null })
      }
    } catch (error) {
      this.setState({ error });
    }
  };

  clearWeather = () => {
    this.setState(() => ({
      weatherList: [],
      viewList: false
    }),() => { this.weatherText.current.value= ""})
  }


  render() {
    console.log('todo render');

    const { weatherList, viewList, error } = this.state

    return (
      <div className="todo">
        <h1 className="todo__title">Weather APP</h1>
        <WeatherForm  ref={this.weatherText} viewWeather={this.loadWeather} />
        {viewList && (
          <div className="todo__weather_container">
            {error !== null ? (
              <div className="todo__error">
                <p className='flex-1 px-4 text-[20px] font-bold'>No Data Available</p>
              </div>
            ): (
              <WeatherList weatherList={weatherList}/>
            )}
            
            <button type="button" className="todo_form__btn mb-[20px]" onClick={this.clearWeather}>Clear Data</button>
          </div>
        )}
      </div>
    );
  }
}
