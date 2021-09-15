import React from 'react'

import ProfileStaticContainer from './profileStaticContainer'

const ProfileStatic = (props) => {
  return(
    <div className='profileStatic'>
      <ProfileStaticContainer label='User Name' fieldValue={ props.userName } />
      <ProfileStaticContainer label='Password' fieldValue={ props.password } />
    </div>
  )
}

export default ProfileStatic