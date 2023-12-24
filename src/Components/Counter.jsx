import React from 'react'
import {useSelector, useDispatch} from "react-redux"

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.counter)
    const isShow = useSelector((state)=>state.isShow)

    const increaseHandler = () =>{
        dispatch({type : "increase"})
    }

    const decreaseHandler = () =>{
        dispatch({type : "decrease"});
    }

    const increaseByFive = () => {
        dispatch({type : "IncreaseFive", amount : 5 })
    }

    const toggleHandler = () => {
        dispatch({type : "toggle" })
    }

  return (
    <>
    <section>
        <h2>Redux Counter</h2>
        {
            isShow && <h1> {counter} </h1>
        }
        <hr />
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={increaseByFive} >IncreaseBy5</button>
        <button onClick={decreaseHandler}>Decrease</button>
        <button onClick={toggleHandler}>ToggleCounter</button>
    </section>
    </>
  )
}

export default Counter