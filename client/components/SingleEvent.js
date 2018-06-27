import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteCurrentEvent} from '../store'

export class SingleEvent extends Component {
  constructor(props){
    super(props)
    this.deleteEvent = this.deleteEvent.bind(this)
    this.back = this.back.bind(this)
  }

  back(event) {
    event.preventDefault()
    this.props.history.push(`/${this.props.match.params.month}`)
  }
  //deletes event through sending axios request to backend
  deleteEvent() {
    this.props.delete(this.props.event[0].id)
    this.props.history.push(`/${this.props.match.params.month}`)
  }

  render() {
    return (
      <div className="singleEventWrapper">
        <div className="otherheader">
          <button onClick={this.back} type="submit">Back</button>
          <div className="headertext">
            <h1 className="month" >{this.props.event[0].month} {this.props.event[0].day}</h1>
            <h3>{this.props.event[0].name}</h3>
          </div>
        </div>
        <div className="eventinfo">
          <div className="eventStartEnd">
            <h5>{this.props.event[0].startTime} to {this.props.event[0].endTime}</h5>
          </div>
          <div className="eventDesc">
            <p>{this.props.event[0].description}</p>
          </div>
          <div className="eventButtons">
            <div>
              <Link to={`/${this.props.match.params.month}/${this.props.match.params.day}/${this.props.event[0].id}/editEvent`}>
                <button type="submit" >Edit Event</button>
              </Link>
            </div>
            <div>
              <button type="submit" onClick={this.deleteEvent}>Delete Event</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({events}, ownProps) => {
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
