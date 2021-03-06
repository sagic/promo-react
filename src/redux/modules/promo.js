import Immutable from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
export const PROMO_LOAD = 'PROMO_LOAD'
export const PROMO_CREATE_NEW = 'PROMO_CREATE_NEW'
export const PROMO_APPLY_CHANGES = 'PROMO_APPLY_CHANGES'
export const PROMO_RETAKE = 'PROMO_RETAKE'
export const PROMO_GENERATED = 'PROMO_GENERATED'
export const PROMO_CREATE_FINAL = 'PROMO_CREATE_FINAL'
export const PROMO_CREATED_FINAL = 'PROMO_CREATED_FINAL'
export const PROMO_UPDATE_TITLE = 'PROMO_UPDATE_TITLE'

export const LOAD_VERTICALS = 'LOAD_VERTICALS'
export const LOAD_THEMES = 'LOAD_THEMES'

export const UPLOAD_LOGO = 'UPLOAD_LOGO'
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'

// ------------------------------------
// Actions
// ------------------------------------
export function load (id) {
  return {
    type: PROMO_LOAD,
    id
  }
}

export function createNew (promoModel) {
  return {
    type: PROMO_CREATE_NEW,
    promoModel
  }
}

export function applyChanges (promoModel) {
  return {
    type: PROMO_APPLY_CHANGES,
    promoModel
  }
}

export function retake (promoModel) {
  return {
    type: PROMO_RETAKE,
    promoModel
  }
}

export function generated (result) {
  return {
    type: PROMO_GENERATED,
    result: result
  }
}

export function createFinal (promoModel) {
  return {
    type: PROMO_CREATE_FINAL,
    promoModel
  }
}

export function createdFinal (result) {
  return {
    type: PROMO_CREATED_FINAL,
    result
  }
}

export function updateTitle (title) {
  return {
    type: PROMO_UPDATE_TITLE,
    title
  }
}

export function loadVerticals () {
  return {
    type: LOAD_VERTICALS
  }
}

export function loadThemes (verticalId) {
  return {
    type: LOAD_THEMES,
    verticalId
  }
}

export function uploadLogo (payload) {
  return {
    type: UPLOAD_LOGO,
    payload
  }
}

export function uploadImage (payload) {
  return {
    type: UPLOAD_IMAGE,
    payload
  }
}

export const actions = {
  load,
  createNew,
  applyChanges,
  retake,
  generated,
  createFinal,
  createdFinal,
  updateTitle,
  uploadLogo,
  uploadImage
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [PROMO_LOAD]: (state, action) => initialState.setIn(['ui', 'loading'], true),
  [PROMO_CREATE_NEW]: (state, action) => initialState,
  [LOAD_VERTICALS]: (state, action) => {
    console.log('AAAAA')
    let test = initialState.setIn(['create', 'verticals'], [1, 2, 3])
    return test
  },
  [LOAD_THEMES]: (state, action) => initialState.setIn(['create', 'themes'], [1, 2, 3])
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.Map({
  create: {
    ui: {
      loading: false,
      uploading: false,
      generating: false
    },
    model: {
      hash: '',
      title: '',
      music: {
        id: '',
        title: '',
        artist: '',
        thumbnailUrl: '',
        url: ''
      },
      decoration: {},
      decorationImages: [],
      video: {
        url: ''
      },
      ratio: '16:9',
      duration: 15,
      theme: '5655ba2196f2c8f38012ce8f',
      vertical: '',
      videoUrl: '',
      videoThumb: '',
      createdAt: '',
      businessName: ''
    },
    verticals: [],
    themes: []
  },
  dashboard: {
    ui: {
      loading: false
    },
    drafts: [],
    published: []
  }
})

export default function promoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
