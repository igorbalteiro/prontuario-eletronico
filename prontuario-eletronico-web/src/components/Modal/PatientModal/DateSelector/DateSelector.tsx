import React from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = ({startDate, handleChange}) => {
  registerLocale('pt', pt);

  return (
    <DatePicker
      selected={startDate}
      onChange={date => handleChange(date)}
      dateFormat='dd/MM/yyyy'
      locale='pt'
      className='date-picker'
      showYearDropdown
      dropdownMode='select'
    />
  )
};

DateSelector.propTypes = {
  startDate: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default DateSelector;