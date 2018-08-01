import React from 'react';

const INITIAL_STATE = {
  users: {},
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'USERS_SET' : 
    return {...state, users: action.users}
    default: 
      return state;
  }
}

export default userReducer;