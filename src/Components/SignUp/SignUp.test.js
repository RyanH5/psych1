import React from 'react';
import { shallow } from 'enzyme';
import SignUpPage from './Signup';


describe('SignUpPage', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<SignUpPage />)

    expect(wrapper).toMatchSnapshot();
  });
});