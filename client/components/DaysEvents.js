import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class DaysEvents extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
    this.props.daysEvents.length === 0 ?
    (
      <div>
        <h1>No Events Today! Create One Below</h1>
        <Link to="/newEvent">Create a New Event!</Link>
      </div>
    )
    :
    (
    <div>
      {
        this.props.daysEvents.map((event) => (
          <div key={event.id}>
            <Link to={`/${event.id}`}>{event.name}</Link>
          </div>
        ))
      }
      <Link to="/newEvent">Create a New Event!</Link>

    </div>
    )
  )
  }
}

const mapState = ({events}, ownProps) => {
  return {
    daysEvents: events.filter((event) => {
      return (((event.month === ownProps.match.params.month) && (event.day + '' === ownProps.match.params.date)))
    }),
    events
  }
}
const mapDispatch = null

export default connect(mapState, mapDispatch)(DaysEvents)
