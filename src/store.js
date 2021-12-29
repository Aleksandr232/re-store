import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

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
    thunkMiddleware,  stringMiddlleware, logMiddlleware
));


const delayActionCreator=(timeout)=>(dispatch)=>{
    setTimeout(()=>dispatch({
        type: 'DELAYED_ACTION'
    }), timeout)
};


store.dispatch(delayActionCreator(3000));



export default store;
