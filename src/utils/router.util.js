'use strict'

export function extractSiblingRouting (routes) {
  let res = {
    paths: [],
    current: -1
  }

  if (routes.length < 2) {
    return res
  }
  let paths = routes.map((route, i) => (i > 0 ? '/' : '') + route.path)
  let siblings = routes[routes.length - 2].childRoutes
  let toHere = paths.slice(1, -1).join('')
  res.paths = siblings.map((route) => toHere + '/' + route.path)
  res.current = res.paths.indexOf(paths.slice(1).join(''))

  return res
}
