import React from 'react';
import { shallow } from 'enzyme';
import { Contact }from './Contact';

describe('Contact', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Contact />)

    expect(wrapper).toMatchSnapshot();
  });
});