import React from 'react'

const FormLink = (props) => {
  return(
    <span className="formLink"  >
      { props.enableSignUp ? "Already a member? Log In " : "Not a member? Sign Up " }
      <span onClick={ props.onLinkHandler }>Here</span>
    </span>
  )
}

export default FormLink