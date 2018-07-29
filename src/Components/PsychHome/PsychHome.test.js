import React from 'react';
import { shallow } from 'enzyme';
import PsychHome from './PsychHome';

describe('PsychHome', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<PsychHome />)

    expect(wrapper).toMatchSnapshot();
  });
});