import React from 'react';
import { render } from '@testing-library/react';
import DateSelector from './DateSelector';

const dummyFunction = () => 1;

test('renders component', () => {
  const { container } = render(<DateSelector startDate={new Date('01/01/1970')} handleChange={dummyFunction} />);

  const inputTag = container.querySelector('input');

  expect(inputTag).toBeInTheDocument();
});

test('renders input date', () => {
  const { container } = render(<DateSelector startDate={new Date('01/01/1970')} handleChange={dummyFunction} />);

  const datePicker = container.querySelector('input');

  expect(datePicker.value).toEqual('01/01/1970');
});
  