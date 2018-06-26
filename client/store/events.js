import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_EVENTS = 'GET_EVENTS'
const CREATE_NEW_EVENT = 'CREATE_NEW_EVENT'
const EDIT_EVENT = 'EDIT_EVENT'
const DELETE_EVENT = 'DELETE EVENT'

/**
 * ACTION CREATORS
 */

const getEvents = events => ({type: GET_EVENTS, events})
const newEvent = event => ({type: CREATE_NEW_EVENT, event})
const editEvent = event => ({type: EDIT_EVENT, event})
const deleteEvent = id => ({type: DELETE_EVENT, id})

//REDUCER
export default function reducer (events = [], action){

  switch (action.type) {

    case GET_EVENTS:
      return action.events

    case CREATE_NEW_EVENT:
      return [...events, action.event]

    case EDIT_EVENT:
      return events.map(event => {
        console.log('ACTION', action)
        return action.event.id === event.id ? action.event : event
      });

    case DELETE_EVENT:
      return events.filter(event => event.id !== action.id)

    default:
      return events
  }
}

//THUNK CREATORS

export const fetchEvents = () => async (dispatch) => {
  try {
    const events = await axios.get('/api/events')
    return dispatch(getEvents(events.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const createNewEvent = (event) => async (dispatch) => {
  try {
    const newCreatedEvent = await axios.post('/api/events', event)
    return dispatch(newEvent(newCreatedEvent.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const editCurrentEvent = (id, event) => async (dispatch) => {
  try {
    const editedEvent = await axios.put(`/api/events/${id}`, event)
    console.log('IN THUNK', editedEvent)
    return dispatch(editEvent(editedEvent.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const deleteCurrentEvent = (id) => async (dispatch) => {
  try {
    const deletedEvent = await axios.delete(`/api/events/${id}`)
    return dispatch(deleteEvent(id))
  }
  catch (err) {
    console.log(err)
  }
}
