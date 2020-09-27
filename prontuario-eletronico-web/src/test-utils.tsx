import React, { ReactElement, ReactNode } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { initialState as reducerInitialState } from './reducers/index';

const render = (ui: ReactElement, {
  initialState = reducerInitialState,
  store = createStore(rootReducer, initialState),
  ...renderOptions
  } = {}) => {
  const Wrapper : React.FC = ({ children }) => {
    return (
      <Provider store={createStore(rootReducer, reducerInitialState)}>
        {children}
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render }
