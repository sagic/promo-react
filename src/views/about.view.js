import React from 'react'
import classes from './about.view.scss'

class AboutView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h1 className={classes['page-title']}>About Promo</h1>
        <button className='btn btn-default'>
          Test Button1
        </button>
        {' '}
        <button className='btn btn-default'>
          Test Button2
        </button>
      </div>
    )
  }
};

AboutView.propTypes = {}

export default AboutView
