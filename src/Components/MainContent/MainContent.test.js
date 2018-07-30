import React from 'react';
import { shallow } from 'enzyme';
import MainContent from './MainContent';

describe('MainContent', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<MainContent />)

    expect(wrapper).toMatchSnapshot();
  });
});