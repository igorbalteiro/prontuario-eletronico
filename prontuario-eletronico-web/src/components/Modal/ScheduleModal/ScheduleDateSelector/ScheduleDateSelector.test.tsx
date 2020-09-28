import React from 'react';
import { render } from '@testing-library/react';
import ScheduleDateSelector from './ScheduleDateSelector';

const dummyFunction = () => 1;

test('renders component', () => {
  const { container } = render(<ScheduleDateSelector startDate={new Date('01/01/1970 12:00')} minDate={'01/01/1970 19:00'} handleChange={dummyFunction} />);

  const inputTag = container.querySelector('input');

  expect(inputTag).toBeInTheDocument();
});

test('renders input date', () => {
  const { container } = render(<ScheduleDateSelector startDate={new Date('01/01/1970 12:00')} minDate={'01/01/1970 19:00'} handleChange={dummyFunction} />);

  const datePicker = container.querySelector('input');

  expect(datePicker.value).toEqual('01/01/1970 12:00');
});