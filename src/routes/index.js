import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import DummyView from 'views/dummy.view'
import AboutView from 'views/about.view'
import CreateView from 'views/create.view'
import BusinessNameContainer from 'containers/businessName.container'
import BusinessLogoContainer from 'containers/businessLogo.container'

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='dashboard' component={DummyView} >
      <Route path='drafts' component={DummyView} />
      <Route path='published' component={DummyView} />
    </Route>
    <Route path='about' component={AboutView} />
    <Route path='support' component={DummyView} />
    <Route path='create' component={CreateView} >
      <IndexRedirect to='business-name' />
      <Route path='business-name' title='Business Name' component={BusinessNameContainer} />
      <Route path='business-logo' title='Business Logo' component={BusinessLogoContainer} />
      <Route path='vericals' title='Choose Vertical' component={DummyView} />
      <Route path='themes' title='Choose Theme' component={DummyView} >
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
    <Route path='viewer' component={DummyView} />
  </Route>
)
