import { Main } from './Main';
import { shallow } from 'enzyme';
import React from 'react';

describe('Main', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Main />);
  
    expect(wrapper).toMatchSnapshot();
  })
})