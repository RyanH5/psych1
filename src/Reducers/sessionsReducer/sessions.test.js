import { sessionReducer } from './sessions';

describe ('sessionReducer', () => {
  it('should return the initial state', () => {
    const expected = {authUser: null};
    const result = sessionReducer(undefined, {})

    expect(result).toEqual(expected);
  });

  it.skip('should return state wit an authorized user', () => {
    const user = {userName: 'Kevin', email: 'dr.k@gmail.com', password: 'password'};
    const result = sessionReducer(undefined, actions)
  });
});