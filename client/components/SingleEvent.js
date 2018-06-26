import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteCurrentEvent} from '../store'

export class SingleEvent extends Component {
  constructor(props){
    super(props)
    this.deleteEvent = this.deleteEvent.bind(this)
  }


  deleteEvent() {
    this.props.delete(this.props.event[0].id)
    this.props.history.push(`/${this.props.match.params.month}`)
  }

  render() {
    return (
      <div>
        <h1>{this.props.event[0].month} {this.props.event[0].day}</h1>
        <h3>{this.props.event[0].name}</h3>
        <h5>{this.props.event[0].startTime} to {this.props.event[0].endTime}</h5>
        <p>{this.props.event[0].description}</p>
        <div>
          <Link to={`/${this.props.match.params.month}/${this.props.match.params.day}/${this.props.event[0].id}/editEvent`}>
            <button>Edit Event</button>
          </Link>
        </div>
        <div>
          <button onClick={this.deleteEvent}>Delete Event</button>
        </div>
      </div>
    )
  }
}

const mapState = ({events}, ownProps) => {
  console.log(ownProps)
  return {
    event: events.filter((event) => {
      return ((event.id + '') === ownProps.match.params.id)
    }),
    events
  }
}

const mapDispatch = (dispatch) => {
  return {
    delete (id) {
      dispatch(deleteCurrentEvent(id))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleEvent)
