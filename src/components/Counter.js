import classes from './Counter.module.css';
import { counterActions } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const show = useSelector((state)=> state.showCounter);
  const counter = useSelector((state) => state.counter);//automatically set up subscription to the store
  const toggleCounterHandler = () => {
  //  dispatch({type:'toggle'})
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler =() =>{
    //dispatch({type:'INCREMENTBY5'})
    dispatch(counterActions.increment())
  }

  const decrementHandler = () =>{
    //dispatch({type:'DECREMENTBY5'})
    dispatch(counterActions.decrement())
  }

  const increaseHandler =()=>{
    //dispatch({type:'increase',amount:2})
    dispatch(counterActions.increase(2)) //{type:unique identifier,payload}
  }

 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment </button>
        <button onClick={decrementHandler}>Decrement </button>
        <button onClick={increaseHandler}>INCREASE </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
