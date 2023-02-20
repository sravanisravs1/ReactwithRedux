const redux= require('redux');

const counterReducer = (state = {counter:0} ,{type,payload})  =>{

    if (type ==='INCREMENT'){
        return {counter:state.counter + payload};
    }

    if (type === "DECREMENT"){
        return {counter:state.counter - payload};
    }
     return {counter:state.counter};
};

const store=redux.createStore(counterReducer);

const counterSubscriber = () =>{
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type:'INCREMENT',payload:2})
store.dispatch({type:'DECREMENT',payload:2})