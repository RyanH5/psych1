import React from 'react';
import { shallow } from 'enzyme';
import { addArticles } from '../../actions/actions';
import { DisplayPage, mapStateToProps, mapDispatchToProps } from './DisplayPage';

describe('DisplayPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DisplayPage />, { disableLifecycleMethods: true});
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object with the correct keys', () => {
      const mockState = {
        articles: []
      }
      const expected = {
        articles: []
      }
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using addArticles from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addArticles([{title: 'thing', id: 3, name: 'BBC'}]);
      const mappedToProps = mapDispatchToProps(mockDispatch);
      mappedToProps.addArticles([{title: 'thing', id: 3, name: 'BBC'}]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})