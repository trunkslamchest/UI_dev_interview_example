import React from 'react'

import { connect} from 'react-redux'
import { clearUser } from '../../store/actions/actionsIndex'

import '../../utility/defaultButton.css'

const ProfileLogOutButton = (props) => {
  return (
    <button
      className="defaultButton"
      id="logOutButton"
      name="logOutButton"
      onClick={ () => { props.onLogOut() } }
    >
      Log Out
    </button>
  )
}

const dispatch = dispatch => {
  return {
    onLogOut: () => dispatch(clearUser())
  }
}

export default connect(null, dispatch)(ProfileLogOutButton)