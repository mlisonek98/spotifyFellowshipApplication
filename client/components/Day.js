import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class Day extends Component {
  render() {
    return(
      <div className="singleDay">
        <h4 className="date">{this.props.number}</h4>
        <div>
          <div className="eventList">
          {
            this.props.am.sort((a, b) => (a.startTime > b.startTime) ? 1 : ((b.startTime > a.startTime) ? -1 : 0)).map((event) => (
              <div key={event.id}>
                <Link className="eventLink" to={`/${event.month}/${event.day}/${event.id}`}>{event.startTime} {event.name}</Link>
              </div>
            ))
          }
          {
            this.props.pm.sort((a, b) => (a.startTime > b.startTime) ? 1 : ((b.startTime > a.startTime) ? -1 : 0)).map((event) => (
              <div key={event.id}>
                <Link className="eventLink" to={`/${event.month}/${event.day}/${event.id}`}>{event.startTime} {event.name}</Link>
              </div>
            ))
          }
          </div>
          <div className="add">
            <Link  className="addButton" to={`/${this.props.month}/${this.props.number}/newEvent`}>+</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Day)

