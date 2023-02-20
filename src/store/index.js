import { createStore } from 'redux';

const counterReducer = (state={counter:0},{type})=>{
    if (type==="INCREMENTBY5"){
        return{
            counter:state.counter+5
        }
    }
    if (type==="DECREMENTBY5"){
        return{
            counter:state.counter-5
        }
    }
    return state;

}
const store= createStore(counterReducer);

export default store;