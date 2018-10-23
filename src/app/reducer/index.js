import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import demo from './demo';

//  特殊的ACTION_TYPE
const commonReducer = (state = {}, action) => {
    if (action.type == 'SPECIAL') {
        //  
    } else {
        return state;
    }
};

const combineReducer = combineReducers({
    demo
});

export default reduceReducers(commonReducer, combineReducer);