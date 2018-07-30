import React from 'react';
import { shallow } from 'enzyme';
import { Family }from './Family';

describe('Family', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Family />)

    expect(wrapper).toMatchSnapshot();
  });
});