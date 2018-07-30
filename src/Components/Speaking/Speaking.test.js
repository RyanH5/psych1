import React from 'react';
import { shallow } from 'enzyme';
import { Speaking } from './speaking';


describe('Speaking', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Speaking />)

    expect(wrapper).toMatchSnapshot();
  });
});