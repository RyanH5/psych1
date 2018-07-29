import React from 'react';
import { shallow } from 'enzyme';
import WithAuthentication from './WithAuthentication';


describe('WithAuthentication', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<WithAuthentication />)

    expect(wrapper).toMatchSnapshot();
  });
});