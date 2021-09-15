import React from 'react'

import { connect } from 'react-redux'

import HeaderContainer from './components/header/headerContainer'
import FormContainer from './components/form/formContainer'
import ProfileContainer from './components/profile/profileContainer'

import './App.css'

const App = (props) => {
  return (
    <>
      <HeaderContainer />
      <div className="mainContainer">
        { props.isLoggedIn ? <ProfileContainer /> : <FormContainer /> }
      </div>
    </>
  )
}

const store = store => {
  return {
    isLoggedIn: store.user.isLoggedIn
  }
}

export default connect(store)(App)
