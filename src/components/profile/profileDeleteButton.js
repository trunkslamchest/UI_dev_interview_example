import React from 'react'

import { connect} from 'react-redux'
import { clearUser } from '../../store/actions/actionsIndex'

import fetchFunctions from '../../utility/fetchFunctions'
import '../../utility/defaultButton.css'

const ProfileDeleteButton = (props) => {

  const onClickFunctions = () => {
    fetchFunctions('delete', `http://localhost:3001/users/${props.userID}`)
    .then(() => { props.onLogOut() })
  }

  return (
    <button
      className="defaultButton"
      id="logOutButton"
      name="logOutButton"
      onClick={ onClickFunctions }
    >
      Delete Profile
    </button>
  )
}

const dispatch = dispatch => {
  return {
    onLogOut: () => dispatch(clearUser())
  }
}

export default connect(null, dispatch)(ProfileDeleteButton)