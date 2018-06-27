import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createNewEvent} from '../store'

export class NewEvent extends Component {
  constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
    this.back = this.back.bind(this)
  }

  back(event) {
    event.preventDefault()
    this.props.history.push(`/${this.props.match.params.month}`)
  }
  //submit function takes values from the form's input fields and sends them to the store and backend via axios
  submit(event) {
    event.preventDefault();
    let eventInfo = {
      name: event.target.name.value,
      startTime: event.target.startTime.value + ' ' + event.target.startAMPM.value,
      endTime: event.target.endTime.value + ' ' + event.target.endAMPM.value,
      description: event.target.description.value,
      month: this.props.match.params.month,
      day: this.props.match.params.day
    }
    this.props.submitForm(eventInfo)
    this.props.history.push(`/${this.props.match.params.month}`)
  }

  render() {
    return (
      <div className="form-wrapper">
        <div className="otherheader">
          <button onClick={this.back} type="submit">Back</button>
          <div className="header">
            <h1 className="month" >{this.props.match.params.month} {this.props.match.params.day}</h1>
            <h3>Create an Event Below</h3>
          </div>
        </div>
        <form onSubmit={this.submit}>
        <div className="inputs">
          <label>Name</label>
          <input required maxLength="10" className="name" name="name" type="text" />
        </div>
        <div className="inputs">
          <div className="startend">
            <label>Start Time</label>
            <div>
              <select name="startTime" type="text">
                {
                  this.props.time.map((time) => {
                    return (
                      <option key={time}>{time}</option>
                    )
                  })
                }
              </select>
                <select name="startAMPM" type="text">
                  <option>A.M.</option>
                  <option>P.M.</option>
                </select>
            </div>
        </div>
        <div className="startend">
          <label>End Time</label>
          <div>
            <select name="endTime" type="text">
              {
                this.props.time.map((time) => {
                  return (
                    <option key={time}>{time}</option>
                  )
                })
              }
            </select>
            <select name="endAMPM" type="text">
              <option>A.M.</option>
              <option>P.M.</option>
            </select>
          </div>
        </div>
        </div>
        <div>
          <div className="inputs">
              <label>Description</label>
              <textarea required className="desc" name="description" type="text"/>
          </div>
        </div>
        <div className="startend">
          <button type="submit">Submit</button>
        </div>
        </form>
      </div>
    )
  }
}

const mapState = (ownProps) => {
  return {
    time: [
      '12:00',
      '12:15',
      '12:30',
      '12:45',
      '1:00',
      '1:15',
      '1:30',
      '1:45',
      '2:00',
      '2:15',
      '2:30',
      '2:45',
      '3:00',
      '3:15',
      '3:30',
      '3:45',
      '4:00',
      '4:15',
      '4:30',
      '4:45',
      '5:00',
      '5:15',
      '5:30',
      '5:45',
      '6:00',
      '6:15',
      '6:30',
      '6:45',
      '7:00',
      '7:15',
      '7:30',
      '7:45',
      '8:00',
      '8:15',
      '8:30',
      '8:45',
      '9:00',
      '9:15',
      '9:30',
      '9:45',
      '10:00',
      '10:15',
      '10:30',
      '10:45',
      '11:00',
      '11:15',
      '11:30',
      '11:45',
    ]
  }
}
const mapDispatch = dispatch => ({
  submitForm(event){
    dispatch(createNewEvent(event))
  }
});

export default connect(mapState, mapDispatch)(NewEvent)
