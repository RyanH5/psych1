import { userReducer } from './users';

describe ('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {users: {}};
    const result = userReducer(undefined, {})

    expect(result).toEqual(expected);
  });

  it.skip('should return state wit an authorized user', () => {
    const user = {userName: 'Kevin', email: 'dr.k@gmail.com', password: 'password'};
    const result = userReducer(undefined, actions)
  });
});