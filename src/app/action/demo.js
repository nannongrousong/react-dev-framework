import { ADD_DEMO_DATA } from 'APP_ACTIONTYPE/demo';

export const addDemoData = (data) => async (dispatch, getState) => {
    const newData = [...getState().demo, data];

    dispatch({
        type: ADD_DEMO_DATA,
        data: newData
    });
};