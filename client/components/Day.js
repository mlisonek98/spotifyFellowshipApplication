import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const Day = (props) => {
  //this component is a dumb component that loads all events based off of props pased down
  //they are then sorted by morning and afternoon events
  return (
    <div className="singleDay">
      <h4 className="date">{props.number}</h4>
      <div>
        <div className="eventList">
        {
          props.am.sort((aa, bb) => (aa.startTime > bb.startTime) ? 1 : ((bb.startTime > aa.startTime) ? -1 : 0)).map((event) => (
            <div key={event.id}>
              <Link className="eventLink" to={`/${event.month}/${event.day}/${event.id}`}>{event.startTime} {event.name}</Link>
            </div>
          ))
        }
        {
          props.pm.sort((aa, bb) => (aa.startTime > bb.startTime) ? 1 : ((bb.startTime > aa.startTime) ? -1 : 0)).map((event) => (
            <div key={event.id}>
              <Link className="eventLink" to={`/${event.month}/${event.day}/${event.id}`}>{event.startTime} {event.name}</Link>
            </div>
          ))
        }
        </div>
        <div className="add">
          <Link to={`/${props.month}/${props.number}/newEvent`}>
            <button type="submit" className="addButton">+</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Day)

