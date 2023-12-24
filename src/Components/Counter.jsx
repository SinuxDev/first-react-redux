import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { counterAction } from '../Store/CounterReducer';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.counter.counter)
    const isShow = useSelector((state)=>state.counter.isShow)

    const increaseHandler = () =>{
        dispatch(counterAction.increase())
    }

    const decreaseHandler = () =>{
        dispatch(counterAction.decrease());
    }

    const increaseByFive = () => {
        dispatch(counterAction.increaseByFive(5))
    }

    const toggleHandler = () => {
        dispatch(counterAction.toggle())
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