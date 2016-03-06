'use strict'

import React, {PropTypes} from 'react'

class WizardNavButtons extends React.Component {

  constructor (props, context) {
    super(props, context)

    this._gotoPrev = this._gotoPrev.bind(this)
    this._gotoNext = this._gotoNext.bind(this)
  }

  _gotoPrev () {
    this.context.router.push(this.props.prevPath)
  }
  _gotoNext () {
    this.context.router.push(this.props.nextPath)
  }
  render () {
    return (
      <div>
      {this.props.prevPath ? (
        <button onClick={this._gotoPrev}>prev</button>
      ) : null}
      {this.props.nextPath ? (
        <button onClick={this._gotoNext}>next</button>
      ) : null}
      </div>
    )
  }
}

WizardNavButtons.propTypes = {
  history: PropTypes.object,
  prevPath: PropTypes.string,
  nextPath: PropTypes.string
}

WizardNavButtons.contextTypes = {
  router: PropTypes.object.isRequired
}

export default WizardNavButtons
