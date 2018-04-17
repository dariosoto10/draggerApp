import React from 'react';
import { shallow, mount } from 'enzyme';
import Board from './board-layout';
import '../setupTest';

const wrapper = mount(<Board />);

it('board should renders without crashing', () => {
  shallow(<Board />);
});

it('board should have three divs', () => {
  expect(wrapper.find('div').length).toBe(3);
});

it('all divs have got a class at least', () => {
  for(let i of wrapper.find('div')) {
    expect(i.props.className).toBeTruthy();
  }
})

it('board should have a draggable component at least', () => {
  expect(wrapper.find('Draggable')).toBeTruthy()
})

it('board should have a paragraph tag with text "Drag me" ', () => {
  expect(wrapper.find('p').text()).toEqual("Drag me")
})

it('draggable component should have onStart, onDrag  and onStop default props', () => {
  const defaultProps = wrapper.find('Draggable').get(0).type.defaultProps
  expect(defaultProps.onStart).toBeTruthy()
  expect(defaultProps.onDrag).toBeTruthy()
  expect(defaultProps.onStop).toBeTruthy()
})




