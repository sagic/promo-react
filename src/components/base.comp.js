'use strict'

import React from 'react'

export class BindedComponent extends React.Component {

  constructor (props) {
    super(props)
    this._autoBind()
  }

  bind (methods) {
    methods.forEach((method) => {
      this[method] = this[method].bind(this)
    })
  }

  _autoBind () {
    this.bind(
      Object.getOwnPropertyNames(this.constructor.prototype)
        .filter((prop) => typeof this[prop] === 'function')
    )
  }
}
