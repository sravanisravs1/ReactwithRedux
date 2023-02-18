const redux = require('redux') //normal import in js

    //Reducer functions take actions as input from components and split out new state to the store/dispatch                       
const counterReducer = (state = {counter : 0}, {type,payload}) => {
    //initial counter is set to 0,otherwise it will be undefined
    //action type and payload is given as second argument
    if (type === 'increment') {
        return {
            counter: state.counter + payload
        };
    }
    
    
    if (type === 'decrement') {
        return { 
            counter: state.counter - payload 
        };
    }

        return {
        counter : state.counter //if no action,initial state will be returned
    }
}

const store = redux.createStore(counterReducer)//creating store and it takes reducer as input

const counterSubscriber = () => {
    const latestState = store.getState() //creating subscription
    console.log(latestState)
}

store.subscribe(counterSubscriber);//to use the store,we have to subscribe to it

store.dispatch({ type: "increment", payload: 5 }); //dispatch ({action,payload})
store.dispatch({ type: "decrement", payload: 1});