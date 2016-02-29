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
    <Route path='create' component={DummyView} >
      <Route path='business-name' component={DummyView} />
      <Route path='business-logo' component={DummyView} />
      <Route path='vericals' component={DummyView} />
      <Route path='themes' component={DummyView} >
        <Route path='preview' component={DummyView} />
      </Route>
    </Route>
    <Route path='generate' component={DummyView} />
    <Route path='edit' component={DummyView} >
      <Route path='customize' component={DummyView}>
        <Route path='captions' component={DummyView} />
        <Route path='music' component={DummyView} />
      </Route>
      <Route path='publish' component={DummyView} />
    </Route>
  </Route>
)
