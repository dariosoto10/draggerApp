import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './header-layout';
import '../setupTest';

const wrapper = mount(<Header />);

it('header should renders without crashing', () => {
  shallow(<Header />);
});

it('header should have one header tag', () => {
  expect(wrapper.find('header').length).toBe(1);
});

it('header should have h1 tag and p tag', () => {
  expect(wrapper.find('h1').length).toBeTruthy();
  expect(wrapper.find('p').length).toBeTruthy();
});

it('header h1 tag should have include text "Welcome"', () => {
  expect(wrapper.find('h1')).toIncludeText('Welcome')
})

it('header p tag should have include text "board"', () => {
  expect(wrapper.find('p')).toIncludeText('board')
})

it('all tag have got a class at least', () => {
  expect(wrapper.find('p').props().className).toBeTruthy()
  expect(wrapper.find('h1').props().className).toBeTruthy()
  expect(wrapper.find('header').props().className).toBeTruthy()
})




