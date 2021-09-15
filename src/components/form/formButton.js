import React from 'react'

import '../../utility/defaultButton.css'

const FormButton = (props) => {

  let buttonText

  const onClickFunctions = () => {
    props.isEditingProfile && props.onEditProfileHandler()
    props.onSubmitHandler()
  }

  if(props.isEditingProfile) buttonText = 'Confirm'
  else
    if(props.enableSignUp) buttonText = "Sign Up"
    else buttonText = "Log In"

  return(
    <button
      className='defaultButton'
      id='formButton'
      name='formButton'
      onClick={ onClickFunctions }
    >
      { buttonText }
    </button>
  )
}

export default FormButton