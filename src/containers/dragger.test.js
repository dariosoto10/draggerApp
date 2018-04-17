import React from 'react';
import { shallow, mount } from 'enzyme';
import Dragger from './dragger';
import '../setupTest';

const wrapper = mount(<Dragger />);
const shallowTest = shallow(<Dragger />)
const mockCallback = jest.fn();

it('dragger should renders without crashing', () => {
  shallow(<Dragger />);
});

it('dragger should has activeDrags, deltaPosition and dragging state', () => {
  expect(shallowTest.state().activeDrags).toEqual(0)
  expect(shallowTest.state().deltaPosition.x).toEqual(0)
  expect(shallowTest.state().deltaPosition.y).toEqual(0)
  expect(shallowTest.state().dragging).toEqual(false)
})

it('dragger test onStart function', () => {
  shallowTest.instance().onStart = jest.fn()
  shallowTest.update()
  shallowTest.instance().onStart()
  expect(shallowTest.instance().onStart).toBeCalledWith();

  let shallowF = shallow(<Dragger />)
  shallowF.update()
  shallowF.instance().onStart()
  expect(shallowF.state().activeDrags).toEqual(1)
})

it('dragger test onStop function', () => {
  shallowTest.instance().onStop = jest.fn()
  shallowTest.update()
  shallowTest.instance().onStop()
  expect(shallowTest.instance().onStop).toBeCalledWith();

  let shallowF = shallow(<Dragger />)
  shallowF.update()
  shallowF.instance().onStop()
  expect(shallowF.state().activeDrags).toEqual(-1)
})

it('dragger test handleDrag function', () => {
  shallowTest.instance().handleDrag = jest.fn()
  shallowTest.update()
  shallowTest.instance().handleDrag()
  expect(shallowTest.instance().handleDrag).toBeCalledWith();
})

it('dragger should has Board and Position component', () => {
  expect(wrapper.find('Board')).toBeTruthy()
  expect(wrapper.find('Position')).toBeTruthy()
})




