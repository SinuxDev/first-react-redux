import { useDispatch, useSelector } from 'react-redux'
import { getToDo } from '../Store/Reducer/todo'

const ToDo = () => {
    const dispatch = useDispatch();
    const todoSelector = useSelector((state) => state.todo.data);
    const isLoading = useSelector((state)=> state.todo.isLoading);
    
    const getToDoHandler = () => {
        dispatch(getToDo());
        console.log(todoSelector);
    }

  return (
    <>
    <div className='welcome-sec' >
        <button className='welcome-btn' onClick={getToDoHandler} >Get ToDo</button>
    </div>

    <section>
        {
            isLoading && <h1>Loading btich wait!!</h1>
        }
        { !isLoading && todoSelector.map(tooDoo => (
                <p> {tooDoo.title} </p>
            )) 
        }
        {
            !isLoading && todoSelector.length < 1 && <h1>Click get button</h1>
        }
    </section>

    </>
  )
}

export default ToDo