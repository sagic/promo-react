'use strict'

import React from 'react'
import { BindedComponent } from '../components/base.comp'
import Dropzone from 'react-dropzone'

class BusinessLogoContainer extends BindedComponent {
  _onDrop (files) {
    console.log('Received files: ', files)
  }

  render () {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div>Drop some files here, or click to select files to upload</div>
        </Dropzone>
      </div>
    )
  }
}

BusinessLogoContainer.propTypes = {
}

export default BusinessLogoContainer
