import { ADD_DEMO_DATA } from 'APP_ACTIONTYPE/demo';

let initialState = [{
    id: 1,
    name: 'zhangsan',
    sex: 'man'
}, {
    id: 2,
    name: 'lisi',
    sex: 'man'
}, {
    id: 3,
    name: 'wanger',
    sex: 'woman'
}];

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_DEMO_DATA:
            return action.data;
        default:
            return state;
    }
};