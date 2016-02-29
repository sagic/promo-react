'use strict'

import React, {PropTypes} from 'react'
import {Link} from 'react-router'

class Header extends React.Component {
  constructor (props, context) {
    super(props)
    this.state = {}
    // console.log(context.router)
  }
  render () {
    return (
      <div>
        <Link to='/'>Promo</Link>
        <Link to='/dashboard'>Projects</Link>
        <Link to='/about'>About</Link>
        <Link to='/support'>Support</Link>
        <button>Login</button>
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
