// import { createStore } from 'redux';
import { configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {counter:0 , showCounter:true}
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){//allowed to mutate state.
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        toggleCounter(state){
            state.showCounter= !state.showCounter
        },
        increase(state,action){
            state.counter = state.counter + action.payload
        }
    }
});

export const counterActions = counterSlice.actions;

// const counterReducer = (state=initialState ,action)=>{
//     if (action.type==="INCREMENTBY5"){
//         return{
//             counter:state.counter+ 5,
//             showCounter:state.showCounter
//         }
//     }
//     if (action.type==="DECREMENTBY5"){
//         return{
//             counter:state.counter-5,
//             showCounter : state.showCounter
//         }
//     }

//     if (action.type==='increase'){
//         return{
//             counter:state.counter + action.amount ,
//             showCounter :state.showCounter
//         }
//     }
//     if (action.type ==='toggle'){
//         return{
//             showCounter : !state.showCounter,
//             counter :state.counter
//         }
//     }
    
//     return state;
// }
// const store= createStore(counterReducer);

const store = configureStore({
    
        reducer:counterSlice.reducer
    }
) //multiple reducers

export default store;