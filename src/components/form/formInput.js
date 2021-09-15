import React from 'react'

const FormInput = (props) => {

  const onChangeFunctions = (event) => { props.onChangeHandler(event.target.name, event.target.value) }

  if(props.fieldType === 'text') {
    return (
      <div className='formInputContainer'>
        <span>User Name</span>
        <input
          className='formInput'
          id='userName'
          name='userName'
          onChange={ onChangeFunctions }
          type={ props.fieldType }
          value={ props.fieldValue }
        />
      </div>
    )
  } else {
    return (
      <div className='formInputContainer'>
        <span>Password</span>
        <input
          className='formInput'
          id='password'
          name='password'
          onChange={ onChangeFunctions }
          type={ props.fieldType }
          value={ props.fieldValue }
        />
      </div>
    )
  }
}

export default FormInput
