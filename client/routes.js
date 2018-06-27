import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Calendar, SingleEvent, NewEvent, EditEvent} from './components'
import {fetchEvents} from './store'

// All routes contained in this component
class Routes extends Component {

  //this way events are fetched when user goes to the app
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (
      <Switch>
        <Route exact path="/:month" component={Calendar} />
        <Route exact path="/:month/:day/newEvent" component={NewEvent} />
        <Route exact path="/:month/:day/:id" component={SingleEvent} />
        <Route exact path="/:month/:day/:id/editEvent" component={EditEvent} />
        <Redirect from="/" to="/July" />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = null

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(fetchEvents())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
