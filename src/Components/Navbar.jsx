import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { authActions } from '../Store/AuthReducer'

const Navbar = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin)

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }
  return (
    <nav>
    <h1>Redux Counter</h1>
      {
        isLogin && (
          <ul>
            <li>MyRecord</li>
            <li>Profile</li>
            <button onClick={logoutHandler} > 
                <li>
                    Logout
                </li>
            </button>
        </ul>
        )
      }
    </nav>
  )
}

export default Navbar