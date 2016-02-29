import React from 'react'
import { Route, IndexRoute } from 'react-router'

import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import DummyView from 'views/about.view'
import AboutView from 'views/about.view'

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='dashboard' component={DummyView} >
      <Route path='drafts' component={DummyView} />
      <Route path='published' component={DummyView} />
    </Route>
    <Route path='about' component={AboutView} />
    <Route path='support' component={DummyView} />

  </Route>
)
