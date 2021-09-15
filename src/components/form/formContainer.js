import React from 'react'

import FormButton from './formButton'
import FormError from './formError'
import FormInput from './formInput'
import FormLink from './formLink'
import ProfileEditProfileButton from '../profile/profileEditProfileButton'


import { connect } from 'react-redux'
import { createUser, getUser, getUsers, setError, updateUser } from '../../store/actions/userActions'
import fetchFunctions from '../../utility/fetchFunctions'

import './form.css'

class FormContainer extends React.Component {

  state = {
    password: this.props.password || "",
    userName: this.props.userName || "",
    enableSignUp: false
  }

  onChangeHandler = (fieldName, fieldValue) => { this.setState({ [fieldName]: fieldValue }) }

  onLinkHandler = () => {
    this.props.error && this.props.onSetError(false)
    let switchEnableSignUp = this.state.enableSignUp
    this.setState({ enableSignUp: !switchEnableSignUp })
  }

  onSubmitHandler = () => {
    this.props.error && this.props.onSetError(false)
    if(this.state.userName.length < 1) this.props.onSetError("Please Enter A User Name")
    if(this.state.password.length < 1) this.props.onSetError("Please Enter A Password")
    this.checkUserName(this.state.userName)
  }

  checkUserName = (userName) => {
    fetchFunctions('get', 'http://localhost:3001/users')
    .then(res => {
      let userNames = res.map(user => user.userName)
      let validUserName = true
      for(let name in userNames){ if(userNames[name] === userName) validUserName = false }
      if(!validUserName && this.state.enableSignUp) this.props.onSetError("User Name Already In Use")
      else this.onValidUserName({ id: this.props.userID, password: this.state.password, userName: this.state.userName })
    })
  }

  onValidUserName = (userOBJ) => {
    if(this.props.isEditingProfile) this.props.onUpdateUser(userOBJ)
    else if(this.state.enableSignUp) this.props.onCreateUser(userOBJ)
    else this.props.onGetUser(userOBJ)
  }

  render(){
    return(
      <div className='formContainer'>
        { this.props.error && <FormError errorMSG={ this.props.error } /> }
        <FormInput
          fieldValue={ this.state.userName }
          onChangeHandler={ this.onChangeHandler }
          fieldType='text'
        />
        <FormInput
          fieldValue={ this.state.password }
          onChangeHandler={ this.onChangeHandler }
          fieldType='password'
        />
        <div className='formButtonContainer'>
          <FormButton
            isEditingProfile={ this.props.isEditingProfile }
            enableSignUp={ this.state.enableSignUp }
            onEditProfileHandler={ this.props.onEditProfileHandler }
            onSubmitHandler= { this.onSubmitHandler }
          />
          { this.props.isEditingProfile &&
            <ProfileEditProfileButton
              isEditingProfile={ this.props.isEditingProfile }
              onEditProfileHandler={ this.props.onEditProfileHandler }
            />
          }
        </div>
        { !this.props.isEditingProfile && <FormLink enableSignUp={ this.state.enableSignUp } onLinkHandler={ this.onLinkHandler } /> }
      </div>
    )
  }
}

const store = store => {
  return {
    error: store.user.error,
    users: store.users
  }
}

const dispatch = dispatch => {
  return {
    onCreateUser: (userOBJ) => dispatch(createUser(userOBJ)),
    onUpdateUser: (userOBJ) => dispatch(updateUser(userOBJ)),
    onGetUser: (userOBJ) => dispatch(getUser(userOBJ)),
    onGetUsers: () => dispatch(getUsers()),
    onSetError: (errorMSG) => dispatch(setError(errorMSG))
  }
}

export default connect(store, dispatch)(FormContainer)