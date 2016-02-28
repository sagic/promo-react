import Immutable from 'immutable';

// ------------------------------------
// Constants
// ------------------------------------
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

// ------------------------------------
// Actions
// ------------------------------------
export function login (email, password) {
  return {
    type: USER_LOGIN,
    payload: {
      email: email,
      password: password
    }
  }
}

export function logout () {
  return {
    type: USER_LOGOUT
  }
}

export const actions = {
  login,
  logout
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_LOGIN]: function(state, action) {
    // make async
    let res = {
      username: 'dummy user',
      email: 'dummy@dumb.com',
      status: 1,
      preferences: {
        businessName: 'DummyCorp',
        businessLogo: {
          url: '',
          thumbUrl: '',
          backgroundColor: '#fff'
        },
        previousVertical: 1
      }
    };
    return initialState.merge(res);
  },
  [USER_LOGOUT]: (state, action) => initialState
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.Map({
  username: '',
  email: '',
  status: -1,
  preferences: {
    businessName: '',
    businessLogo: {
      url: '',
      thumbUrl: '',
      backgroundColor: '#fff'
    },
    previousVertical: null
  }
});

export default function userReducer(state=initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
}
