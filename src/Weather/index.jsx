import React, { PureComponent } from 'react';
import './weather.css';
import WeatherForm from './weatherForm';
import WeatherListWrapper from './weatherListWrapper';

export default class Weather extends PureComponent {
  // state = {
  //   // this should be object
  //   weatherList: [],
  //   viewList: false,
  //   error: null,
  //   appStatus: [],
  // };

  // weatherText = createRef();

  // loadStatus = ({ type, city }) => {
  //   this.setState(({ appStatus }) => { 
  //     return {
  //       appStatus: [...appStatus, {type, action: 'REQUEST', city}]
  //     }
  //   })
  // }

  // errorStatus = ({ type, city, error}) => {
  //   this.setState(({ appStatus }) => {
  //     return {
  //       appStatus: appStatus.map(x => {
  //         if(x.type === type && x.city === city) {
  //           return { ...x, action: 'ERROR', errorMessage: error.message }
  //         }
  //         return x;
  //       })
  //     }
  //   })
  // };

  // successStatus = ({ type, city }) => {
  //   this.setState(({ appStatus }) => ({ 
  //       appStatus: appStatus.filter(x => !(x.type === type && x.city === city)),
  //   }));
  // }

  // loadWeather = async(event) => {
  //   const type = 'VIEW_WEATHER'
  //   const weatherText = this.weatherText.current.value;
  //   try {
  //     event.preventDefault();
  //     this.loadStatus({ type, city: weatherText })
  //     let url = 'http://localhost:3000/weatherList';
  //     url += `?cityName=${weatherText}`

  //     const res = await fetch(url);
  //     const json = await res.json();

  //     if (!res.ok) {
  //       throw new Error(json);
  //     }

  //     this.setState({ weatherList: json, viewList: true });
  //     this.successStatus({ type, city: weatherText });
  //     // nver set the in the try
  //     // if(json.length === 0) {
  //     //   return this.setState({error: 'No Data Available'})
  //     // } else {
  //     //   return this.setState({ error: null })
  //     // }


  //   } catch (error) {
  //     // this.setState({ error });
  //     this.errorStatus({ type, city: weatherText, error, });
  //   }
  // };

  // clearWeather = () => {
  //   this.setState(() => ({
  //     weatherList: [],
  //     viewList: false
  //   }),() => { this.weatherText.current.value= ""})
  // }


  render() {
    console.log('todo render');

    // const viewWeatherStatus = appStatus.filter(x => x.type === 'VIEW_WEATHER')

    // console.log(viewWeatherStatus)

    return (
      <div className="todo">
        <h1 className="todo__title">Weather APP</h1>
        {/* <WeatherForm  ref={this.weatherText} viewWeather={this.loadWeather} /> */}
        <WeatherForm  />
        <WeatherListWrapper />

        {/* {viewWeatherStatus[0]?.action === 'REQUEST' && <h1>Loading...</h1>}
            {viewWeatherStatus[0]?.action === 'ERROR' && (
                <h1>{viewWeatherStatus[0]?.errorMessage}</h1>
              )} */}
            {/* {viewList && (
              <div className="todo__weather_container">
                {weatherList.length === 0 ? (
                  <div className="todo__error">
                    <p className='flex-1 px-4 text-[20px] font-bold'>No Data Available</p>
                  </div>
                ) : (
                  <WeatherList weatherList={weatherList}/>
                )}
                  
                <button type="button" className="todo_form__btn mb-[20px]" onClick={this.clearWeather}>Clear Data</button>
              </div>
            )} */}
      </div>
    );
  }
}
