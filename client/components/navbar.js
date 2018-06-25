// import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {logout} from '../store'

// export class Navbar extends Component {
//   constructor(props){
//     super(props)
//   }
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         <h1>{this.props.month}</h1>
//         <nav>
//           {isLoggedIn ? (
//             <div>
//               {/* The navbar will show these links after you log in */}
//               <Link to="/home">Home</Link>
//               <a href="#" onClick={handleClick}>
//                 Logout
//               </a>
//             </div>
//           ) : (
//             <div>
//               {/* The navbar will show these links before you log in */}
//               <Link to="/login">Login</Link>
//               <Link to="/signup">Sign Up</Link>
//             </div>
//           )}
//         </nav>
//         <hr />
//       </div>
//     )
//   }
// }

// /**
//  * CONTAINER
//  */
// const mapState = (state, ownProps) => {
//   // console.log(ownProps)
//   return {
//     isLoggedIn: !!state.user.id,
//     currentMonth: ownProps
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)
