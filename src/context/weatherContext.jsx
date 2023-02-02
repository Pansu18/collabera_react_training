import React, { createContext, Component, createRef } from 'react'

export const WeatherContext = createContext();

export default class WeatherProvider extends Component {
    state = {
        // this should be object
        weatherList: [],
        viewList: false,
        error: null,
        appStatus: [],
    };

    weatherText = createRef();

//     loadStatus = ({ type, city }) => {
//         this.setState(({ appStatus }) => { 
//             return {
//                 appStatus: [...appStatus, {type, action: 'REQUEST', city}]
//             }
//         })
//     }

//     errorStatus = ({ type, city, error}) => {
//     this.setState(({ appStatus }) => {
//       return {
//         appStatus: appStatus.map(x => {
//           if(x.type === type && x.city === city) {
//             return { ...x, action: 'ERROR', errorMessage: error.message }
//           }
//           return x;
//         })
//       }
//     })
//   };

//   successStatus = ({ type, city }) => {
//     this.setState(({ appStatus }) => ({ 
//         appStatus: appStatus.filter(x => !(x.type === type && x.city === city)),
//     }));
//   }

    loadWeather = async(event) => {
        const type = 'VIEW_WEATHER'
        const weatherText = this.weatherText.current.value;
        try {
        event.preventDefault();
        // this.loadStatus({ type, city: weatherText })
        let url = 'http://localhost:3000/weatherList';
        url += `?cityName=${weatherText}`

        const res = await fetch(url);
        const json = await res.json();

        if (!res.ok) {
            throw new Error(json);
        }

        this.setState({ weatherList: json, viewList: true });
        // this.successStatus({ type, city: weatherText });
        // nver set the in the try
        // if(json.length === 0) {
        //   return this.setState({error: 'No Data Available'})
        // } else {
        //   return this.setState({ error: null })
        // }


        } catch (error) {
        // this.setState({ error });
        // this.errorStatus({ type, city: weatherText, error, });
        }
    };

    clearWeather = () => {
        this.setState(() => ({
            weatherList: [],
            viewList: false
        }),() => { this.weatherText.current.value= ""})
    }

    getRequestStatus = ({ type, cityName }) => {
        const { appStatus } = this.state;

        return appStatus.find(
            x => x.type === type && x.action === 'REQUEST' && x.cityName === cityName
        );
    };

    render() {
        const { children } = this.props;
        const { weatherList, viewList } = this.state;

        return (
            <WeatherContext.Provider
                value={{
                    loadWeather: this.loadWeather,
                    clearWeather: this.clearWeather,
                    weatherList,
                    viewList,
                    weatherText: this.weatherText,
                    getRequestStatus: this.getRequestStatus
                }}
            >
                {children}
            </WeatherContext.Provider>
        )
    }
}
