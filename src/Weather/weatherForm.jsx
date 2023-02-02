import React, { memo } from 'react';
import { WeatherContext } from '../context/weatherContext';

const WeatherForm = () => {
  console.log('TodoForm render');
  return (
    <WeatherContext.Consumer>
      {({ loadWeather, weatherText }) => (
        <form className="todo__form todo_form" onSubmit={loadWeather}>
          <input ref={weatherText} type="text" className="todo_form__input" />
          <button type="submit" className="todo_form__btn">
            View Weather
          </button>
        </form>
      )}
    </WeatherContext.Consumer>
    // <form className="todo__form todo_form" onSubmit={viewWeather}>
    //   <input ref={ref} type="text" className="todo_form__input" />
    //   <button type="submit" className="todo_form__btn">
    //     View Weather
    //   </button>
    // </form>
  );
};

// WeatherForm.propTypes = {
//   addTodo: PropTypes.func.isRequired,
// };

export default memo(WeatherForm);
