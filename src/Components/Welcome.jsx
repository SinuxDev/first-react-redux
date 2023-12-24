import React from 'react'
import { useDispatch } from 'react-redux';
import { authActions } from '../Store/AuthReducer';

const Welcome = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  }

  return (
    <div className='welcome-sec' >
        <button className='welcome-btn' onClick={loginHandler} >
            Login to Redux Counter
        </button>
    </div>
  )
}

export default Welcome