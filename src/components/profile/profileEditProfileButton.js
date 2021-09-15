import React from 'react'

import '../../utility/defaultButton.css'

const ProfileEditButton = (props) => {

  const onClickFunctions = () => { props.onEditProfileHandler() }

  return (
    <button
      className="defaultButton"
      id="EditProfileButton"
      name="EditProfileButton"
      onClick={ onClickFunctions }
    >
      { props.isEditingProfile ? "Cancel" : "Edit Profile" }
    </button>
  )
}

export default ProfileEditButton