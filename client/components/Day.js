import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class Day extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className="singleDay">
        <h4>{this.props.number}</h4>
        <div>
        {
          this.props.events.map((event) => (
            <div key={event.id}>
              <Link to={`/${event.month}/${event.day}/${event.id}`}>{event.name}</Link>
            </div>
          ))
        }
        <Link to={`/${this.props.month}/${this.props.number}/newEvent`}>
          <button>+</button>
        </Link>
        </div>
      </div>
    )
  }
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Day)

