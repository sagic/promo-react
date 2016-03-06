import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import { createNew, uploadLogo, loadVerticals, loadThemes } from '../redux/modules/promo'
import classes from './create.view.scss'
import { extractSiblingRouting } from '../utils/router.util'
import WizardNavButtons from '../components/wizardNavButtons.comp'

class CreateView extends React.Component {

  // componentWillMount () {
  //   this.context.router.setRouteLeaveHook(
  //     this.props.route,
  //     this.routerWillLeave
  //   )
  // }
  _somethingBla () {
    console.log('bla');
  }

  render () {
    let siblings = extractSiblingRouting(this.props.routes)

    let currentRoute = this.props.routes[this.props.routes.length - 1]

    let prevPath = (siblings.current > 0) ? siblings.paths[siblings.current - 1] : ''
    let nextPath = (siblings.current < siblings.paths.length - 1) ? siblings.paths[siblings.current + 1] : ''

    return (
      <div className={classes.container}>
        <h1>{currentRoute.title}</h1>
        <button className='btn btn-default' onClick={this.props.loadVerticals}>Load Verticals</button>
        <div>
          {this.props.children}
        </div>
        <Link to='/'>Promo</Link>
        <Link to='/dashboard'>Projects</Link>
        <Link to='/about'>About</Link>
        <Link to='/support'>Support</Link>
        <WizardNavButtons
          prevPath={prevPath}
          nextPath={nextPath}
          somethingWasDone={this._somethingBla}
          />
      </div>
    )
  }
}

CreateView.propTypes = {
  promo: PropTypes.object.isRequired,
  loadVerticals: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  routes: PropTypes.array,
  route: PropTypes.object
}

CreateView.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  promo: state.promo,
  user: state.user
})

export default connect((mapStateToProps), {
  loadVerticals: loadVerticals,
  loadThemes: loadThemes,
  createNewPromo: createNew,
  uploadLogo: uploadLogo
})(CreateView)
