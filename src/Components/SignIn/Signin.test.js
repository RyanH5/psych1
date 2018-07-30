import React from 'react';
import { shallow } from 'enzyme';
import SignInPage from './Signin';

describe('SignInPage', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<SignInPage />)

    expect(wrapper).toMatchSnapshot();
  });
});