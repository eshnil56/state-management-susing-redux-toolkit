import React from 'react'
import {useSelector} from "react-redux"

function Profile() {
    const user=useSelector((state)=>state.user.value) 
    const themes=useSelector((state)=>state.theme.value)
  return (
    <div style={{color:themes}}>
    <h1>Name:{user.name}</h1>
    <p>Age:{user.age}</p>
    <p>Email:{user.email}</p>
    </div>
  )
}

export default Profile