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
          <Link to={`/${this.props.month}/${this.props.number}`}>Click Here To See Events!</Link>
        </div>
      </div>
    )
  }
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Day)

