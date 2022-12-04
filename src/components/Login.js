import React from 'react'
import {useDispatch} from "react-redux"
import { login,logout} from '../features/user';
function Login() {
 const dispatch=useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(login({name:"nilesh",age:23,email:"eshnil6@gmail.com"}))}>login</button>
      <button onClick={()=>dispatch(logout())}>logout</button>
    </div>
  )
}

export default Login