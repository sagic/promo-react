'use strict'

import React from 'react'
import classes from './footer.comp.scss'

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className={classes.container}>Footer</div>
    )
  }
}

Footer.propTypes = {}

export default Footer
