import React, { PropTypes } from 'react'
import '../../styles/core.scss'
import Header from '../../components/header.comp'
import Footer from '../../components/footer.comp'
import classes from './CoreLayout.scss'

function CoreLayout ({ children }) {
  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes['content-wrapper']}>
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
