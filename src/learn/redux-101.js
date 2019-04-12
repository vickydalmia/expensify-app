import {createStore} from 'redux';


const increByF = ({increBy = 1}={})=>{
    return {
        type: 'INCREMENT',
        increBy: increBy
    };
}
const decreByF = ({decreBy=1}={})=>{
    return {
        type: 'DECREMENT',
        decreBy: decreBy
    }
}
const resetF = ({reset=0}={})=>{
    return {
        type: 'RESET',
        reset: reset
    }
}
const countReducer = (state = {count: 0}, action)=>{
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.increBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decreBy
            };
        case 'RESET':
            return{
                count: action.reset
            };
        default:
            return state;
    }
};
const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});
//if you want to unsubscribe the subscriptions than call unsubscribe()
//increment

store.dispatch(increByF({
    increBy: 5
}));
store.dispatch(resetF({
   reset:0
}));
store.dispatch(decreByF({
    decreBy: 5
}));
