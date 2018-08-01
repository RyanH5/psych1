import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './Home';

describe('HomePage', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Homepage />);

    expect(wrapper).toMatchSnapshot();
  })
});