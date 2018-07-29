import React from 'react';
import { shallow } from 'enzyme';
import { ResilienceTraining } from './ResilienceTraining';

describe('ResilienceTraining', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<ResilienceTraining />)

    expect(wrapper).toMatchSnapshot();
  });
});