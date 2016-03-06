'use strict'

import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import classes from './header.comp.scss'

class Header extends React.Component {

  constructor (props, context) {
    super(props, context)

    this._test = this._test.bind(this)
  }

  _test () {
    this.context.router.push('/support')
  }

  render () {
    return (
      <div className={classes.container}>
        <Link to='/'>Promo</Link>
        <Link to='/dashboard'>Projects</Link>
        <Link to='/about'>About</Link>
        <Link to='/support'>Support</Link>
        <button onClick={this._test}>Login</button>
        <button>Logout</button>
      </div>
    )
  }
}

Header.propTypes = {}
Header.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Header
