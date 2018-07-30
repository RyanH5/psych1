import React from 'react';
import { shallow } from 'enzyme';
import { Psychotherapy } from './Psychotherapy';

describe('Psychotherapy', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Psychotherapy />)

    expect(wrapper).toMatchSnapshot();
  });
});