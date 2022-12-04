import React from 'react'
import {useSelector,useDispatch} from "react-redux"

function Profile() {
    const user=useSelector((state)=>state.user.value) 
  return (
    <div>
    <h1>Name:{user.name}</h1>
    <p>Age:{user.age}</p>
    <p>Email:{user.email}</p>
    </div>
  )
}

export default Profile