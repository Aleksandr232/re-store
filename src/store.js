import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

const logMiddlleware=({getState})=> (next)=>(action)=>{
    console.log(action.type, getState());
    return next(action);
};

const stringMiddlleware=()=>(next)=>(action)=>{
    if(typeof action === 'string'){
        return next({
            type: action
        })
    }

    return next(action);
};






const store = createStore(reducer, applyMiddleware(
    stringMiddlleware, logMiddlleware
));



export default store;
