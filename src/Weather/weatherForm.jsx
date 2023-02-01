import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const WeatherForm = forwardRef(({ viewWeather }, ref) => {
  console.log('TodoForm render');
  return (
    <form className="todo__form todo_form" onSubmit={viewWeather}>
      <input ref={ref} type="text" className="todo_form__input" />
      <button type="submit" className="todo_form__btn">
        View Weather
      </button>
    </form>
  );
});

// WeatherForm.propTypes = {
//   addTodo: PropTypes.func.isRequired,
// };

export default memo(WeatherForm);
