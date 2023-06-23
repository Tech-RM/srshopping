import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
// import logger from "redux-logger";

const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action);
    }
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);

    console.log('NextState: ', store.getState());

}

const middlewares=[loggerMiddleware];
const composedEnhancers=compose(applyMiddleware(...middlewares));
export const store=createStore(rootReducer,undefined,composedEnhancers);