import React from 'react';
import { shallow } from 'enzyme';
import App from './board-layout';
import '../setupTest';

it('renders without crashing', () => {
  shallow(<App />);
});