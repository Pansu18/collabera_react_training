import React from 'react';
import Weather from './Weather';
import ErrorWrapper from './ErrorWrapper';
import WeatherProvider from './context/weatherContext';

function App() {
  return (
    <ErrorWrapper>
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </ErrorWrapper>
  )
}

export default App;
