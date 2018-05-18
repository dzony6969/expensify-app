import { createStore } from 'redux';

//action generator

const incrementCount = ({incrementBy = 1} = {}) => (
    {
        type: "INCREMENT",
        incrementBy
});

const decrementCount = ({decrementBy = 1} ={}) => ({
    type: "DECREMENT",
    decrementBy
})

const resetCount = () => ({
    type: "RESET"
});
const setCount = ({count }) => ({
    type: "SET",
    count

});

//Reducers
// 1. recuder to czysta funkcja musza byc stale nie wspolpracuja 
//z niczym innym spoza reducera
// 2. nigdy nie zmieniaj state ani akcji
// to w skrocie stale rzeczy
let result 
const add = (a, b) => a + b;

const countReducer = (state ={count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        }
        case "DECREMENT":
        const decrementBy = typeof action.decrementBy=== 'number' ? action.decrementBy : 1;
        return {
            count: state.count - action.decrementBy
        }
        case "RESET":
        return {
            count: 0
        }
        case "SET":
        return {
            count: 100
        }
    default: 
    return state;
}
};

const store = createStore(countReducer)

store.subscribe(() => {
    console.log(store.getState()); //pokazuje zmiany w store
});
//increment
store.dispatch(incrementCount({incrementBy: 5}))

// store.dispatch({
//     type: "INCREMENT", //zawsze musi byc TYPE
//     incrementBy: 5
// });
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(resetCount());
store.dispatch(setCount({setCount: 100}));

//Actions - object that got sent to the store
// icrement => decrement => reset
//cos jak idz, stoj, usiadz, pracuj, idz znowu
 //wchodzisz sobie do state