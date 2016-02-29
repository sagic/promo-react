import Immutable from 'immutable';

// ------------------------------------
// Constants
// ------------------------------------
export const PROMO_LOAD = 'PROMO_LOAD'
export const PROMO_CREATE_NEW = 'PROMO_CREATE_NEW'
export const PROMO_APPLY_CHANGES = 'PROMO_APPLY_CHANGES'
export const PROMO_RETAKE = 'PROMO_RETAKE'
export const PROMO_CREATE_FINAL = 'PROMO_CREATE_FINAL'
export const PROMO_UPDATE_TITLE = 'PROMO_UPDATE_TITLE'

export const UPLOAD_LOGO = 'UPLOAD_LOGO'
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'

// ------------------------------------
// Actions
// ------------------------------------
export function load (id) {
  return {
    type: PROMO_LOAD,
    id: id
  }
}

export function createNew (promoModel) {
  return {
    type: PROMO_CREATE_NEW,
    promoModel: promoModel
  }
}

export function applyChanges (promoModel) {
  return {
    type: PROMO_APPLY_CHANGES,
    promoModel: promoModel
  }
}

export function retake (promoModel) {
  return {
    type: PROMO_RETAKE,
    promoModel: promoModel
  }
}

export function createFinal (promoModel) {
  return {
    type: PROMO_CREATE_FINAL,
    promoModel: promoModel
  }
}

export function updateTitle (title) {
  return {
    type: PROMO_UPDATE_TITLE,
    title: title
  }
}

export function uploadLogo (payload) {
  return {
    type: UPLOAD_LOGO,
    payload: payload
  }
}

export function uploadImage (payload) {
  return {
    type: UPLOAD_IMAGE,
    payload: payload
  }
}

export const actions = {
  load,
  createNew,
  applyChanges,
  retake,
  createFinal,
  updateTitle,
  uploadLogo,
  uploadImage
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [PROMO_LOAD]: function(state, action) {
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
  ui: {
    loading: false,
    generating: false
  },
  model: {
    decoration: {},
    decorationImages: [],
    video: {
      url: ''
    },
    vertical: null,
    theme: null
  }
});

export default function userReducer(state=initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
}
