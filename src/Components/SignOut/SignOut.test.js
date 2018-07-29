import React from 'react';
import { shallow } from 'enzyme';
import SignOutPage from './Signout';


describe('SignOutPage', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<SignOutPage />)

    expect(wrapper).toMatchSnapshot();
  });
});