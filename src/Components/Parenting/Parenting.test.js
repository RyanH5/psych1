import React from 'react';
import { shallow } from 'enzyme';
import { Parenting }from './Parenting';

describe('Parenting', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Parenting />)

    expect(wrapper).toMatchSnapshot();
  });
});