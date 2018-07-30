import React from 'react';

const INITIAL_STATE = {
  authUser: null,
};

export const sessionReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'AUTH_USER_SET' : 
      return {...state, authUser: action.authUser}
    default : return state;
  }
}
