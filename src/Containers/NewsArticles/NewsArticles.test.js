import React from 'react';
import { shallow } from 'enzyme';
import { NewsArticles } from './NewsArticles';

describe('NewsArticles', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<NewsArticles articles={[{title: 'hey', name: 'WSJ'}]}/>);

    expect(wrapper).toMatchSnapshot();
  });
})