import React from 'react';
import { shallow, mount } from 'enzyme';
import Board from './position-layout';
import '../setupTest';

const deltaPosition = {
  x: 10, y: 20
}
const wrapper = mount(<Board {...deltaPosition}/>);

it('position should renders without crashing', () => {
  shallow(<Board {...deltaPosition}/>);
});

it('position should has deltaposition props', () => {
  expect(wrapper.props()).toBeTruthy();
  expect(wrapper.props().x).toEqual(10);
  expect(wrapper.props().y).toEqual(20);
})

it('position should has h3 tag with "Position" text included', () => {
  expect(wrapper.find('h3')).toBeTruthy();
  expect(wrapper.find('h3')).toIncludeText('Position');
})

it('position should has h3 with a className property', () => {
  expect(wrapper.find('h3').props().className).toBeTruthy();
})

it('position should has two label tags with a className', () => {
  expect(wrapper.find('Label').get(0).props.className).toBeTruthy();
  expect(wrapper.find('Label').get(1).props.className).toBeTruthy();
})

it('each label of position should be equals to deltaPosition', () => {
  expect(wrapper.find('Label').get(0).props.children).toEqual(deltaPosition.x.toString());
  expect(wrapper.find('Label').get(1).props.children).toEqual(deltaPosition.y.toString());
})




