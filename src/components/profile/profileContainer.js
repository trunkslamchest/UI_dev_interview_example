import React from 'react'

import { connect } from 'react-redux'

import ProfileLogOutButton from './profileLogOutButton'
import ProfileDeleteButton from './profileDeleteButton'
import ProfileEditProfileButton from './profileEditProfileButton'
import ProfileStatic from './profileStatic'

import FormContainer from '../form/formContainer'

import './profile.css'

class ProfileContainer extends React.Component {

  state = { isEditingProfile: false }

  onEditProfileHandler = () => {
    let switchEditProfile = this.state.isEditingProfile
    this.setState({ isEditingProfile: !switchEditProfile })
  }

  render(){
    if(this.state.isEditingProfile) {
      return (
        <FormContainer
          userID={ this.props.user.id }
          userName={ this.props.user.userName }
          password={ this.props.user.password }
          onEditProfileHandler={ this.onEditProfileHandler }
          isEditingProfile={ this.state.isEditingProfile }
        />
      )
    } else {
      return (
        <div className='profileContainer'>
          <ProfileStatic
            userName={ this.props.user.userName }
            password={ this.props.user.password }
          />
          <div className='profileButtonContainer'>
            <ProfileLogOutButton />
            <ProfileDeleteButton userID={ this.props.user.id } />
            <ProfileEditProfileButton
              onEditProfileHandler={ this.onEditProfileHandler }
              isEditingProfile={ this.state.isEditingProfile }
            />
          </div>
        </div>
      )
    }
  }
}

const store = store => {
  return {
    user: store.user.user
  }
}

export default connect(store)(ProfileContainer)