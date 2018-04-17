import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import './setupTest';

const wrapper = mount(<App />);

it('App renders without crashing', () => {
  shallow(<App />);
});

it('App should has Header and Dragger component', () => {
  expect(wrapper.find('Header')).toBeTruthy();
  expect(wrapper.find('Dragger')).toBeTruthy();
});