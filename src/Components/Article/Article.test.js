import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';

describe('Article', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Article source={{name: 'jill'}}/>)

    expect(wrapper).toMatchSnapshot();
  })
})