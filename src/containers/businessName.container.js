'use strict'

import React from 'react'
import { BindedComponent } from '../components/base.comp'

class BusinessNameContainer extends BindedComponent {
  constructor (props) {
    super(props)
    this.state = {
      businessName: 'test123'
    }
  }
  _onChange (evt) {
    this.setState({businessName: evt.target.value})
  }
  render () {
    return (
      <div>
        <label>Business name:</label>
        <input key='inp' type='text' onChange={this._onChange} value={this.state.businessName} />
      </div>
    )
  }
}

BusinessNameContainer.propTypes = {
}

export default BusinessNameContainer
