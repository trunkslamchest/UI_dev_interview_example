import React from 'react'

import { connect } from 'react-redux'

import HeaderLink from './headerLink'

import './header.css'

const HeaderContainer = (props) => {
  return (
    <div className='headerContainer'>
      <div className='headerSubContainer headerSubContainerLeft'>
        <HeaderLink linkText='Home Link' />
        <HeaderLink linkText='Header Link 2' />
        <HeaderLink linkText='Header Link 3' />
      </div>
      <div className='headerSubContainer headerSubContainerRight'>
        { props.isLoggedIn && <HeaderLink linkText={ `UserID: ${ props.userId }` } /> }
      </div>
    </div>
  )
}

const store = store => {
  return {
    userId: store.user.user ? store.user.user.id : "",
    isLoggedIn: store.user.isLoggedIn
  }
}

export default connect(store)(HeaderContainer)