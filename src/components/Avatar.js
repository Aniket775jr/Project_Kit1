import React from 'react'
import './Avatar.css'
function Avatar({src}) {
  return (
    <div className="avatar">
        <img src={src} alt="This is users avatar" />
    </div>
  )
}

export default Avatar