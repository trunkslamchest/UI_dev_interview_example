import React from 'react'

const ProfileStaticContainer = (props) => {
  return(
    <div className='profileStaticFieldContainer'>
      <span className='profileStaticLabel'>{ props.label }</span>
      <span className='profileStaticSpan'>{ props.fieldValue }</span>
    </div>
  )
}

export default ProfileStaticContainer