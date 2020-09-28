import React from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import 'react-datepicker/dist/react-datepicker.css';

const ScheduleDateSelector = ({startDate, minDate, handleChange}) => {
  registerLocale('pt', pt);

  return (
    <DatePicker
      selected={startDate}
      onChange={date => handleChange(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      timeCaption="Horário"
      dateFormat='dd/MM/yyyy HH:mm'
      minDate={minDate}
      locale='pt'
      className='date-picker'
    />
  )
};

ScheduleDateSelector.propTypes = {
  startDate: PropTypes.any.isRequired,
  minDate: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default ScheduleDateSelector;