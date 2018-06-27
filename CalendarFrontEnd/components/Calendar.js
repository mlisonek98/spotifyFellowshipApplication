import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Day} from './Day'
import '../../public/style.css'


//root component
export class Calendar extends Component {
  constructor(props) {
    super(props)
    this.previousMonth = this.previousMonth.bind(this)
    this.nextMonth = this.nextMonth.bind(this)
  }


  //previousmonth() and nextmonth() are necessary for cycling through months
  previousMonth(event){
    event.preventDefault()
    let prevMonth;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const index = months.indexOf(this.props.currentMonth)
    if(index === 0){
      prevMonth = months[11]
    } else {
      prevMonth = months[index - 1]
    }
    this.props.history.push(`/${prevMonth}`)
  }

  nextMonth(event){
    event.preventDefault()
    let theNextMonth;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const index = months.indexOf(this.props.currentMonth)
    if(index === 11){
      theNextMonth = months[0]
    } else {
      theNextMonth = months[index + 1]
    }
    this.props.history.push(`/${theNextMonth}`)
  }
  render() {
    return(
      <div>
        <div className="nav">
          <button className="backbutton" type="submit" onClick={this.previousMonth}>
            Previous Month
          </button>
          <h1>{this.props.currentMonth}</h1>
          <button className="nextbutton" type="submit" onClick={this.nextMonth}>Next</button>
        </div>
        <div className="calendar">
          <div className="weekday">
            {
              //here I map over the days of the week depending on what the current month is, this way the proper day is always over the proper date
              this.props.daysOfWeek[this.props.currentMonth].map((day) => (
                <div key={day}>
                  <h3>{day}</h3>
                </div>
              ))
            }
          </div>
          <div className="day">
          {
            //here I map over the current month array returning a day component for the number of days in that month
            this.props.months[this.props.currentMonth].map((day) => {
              //am and pm are props being passed down to divide morning events and afternoon events. this is necessary for sorting them
              return <Day key={day} number={day} month={this.props.currentMonth} am={this.props.events.filter((event) => {
                return (((event.month === this.props.currentMonth) && (event.day === day) && (event.startTime.includes('A.M.'))))
              })} pm={this.props.events.filter((event) => {
                return (((event.month === this.props.currentMonth) && (event.day === day) && (event.startTime.includes('P.M.'))))
              })}/>
            })
          }
          </div>
        </div>
      </div>
    )
  }
}


const mapState = ({events}, ownProps) => {
  //here I am mapping the current month to the state based off of the params, as well as an object of months and their number of days and days of the week in order of 2018
  return {
    currentMonth: ownProps.match.params.month,
    months: {
      January: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      February: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
      March: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      April: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      May: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      June: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      July: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      August: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      September: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      October: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      November: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      December : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    },
    events,
    daysOfWeek: {
      January: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      February: ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
      March: ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
      April: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      May: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
      June: ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      July: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      August: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'],
      September: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      October: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      November: ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
      December: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    }
  }
}
const mapDispatch = null

export default connect(mapState, mapDispatch)(Calendar)
