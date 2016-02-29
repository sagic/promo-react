import React, { PropTypes } from 'react'
import '../../styles/core.scss'
import Header from '../../components/header.comp'
import Footer from '../../components/footer.comp'

function CoreLayout ({ children }) {
  return (
    <div className='page-container'>
      <Header />
      <div className='view-container'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
