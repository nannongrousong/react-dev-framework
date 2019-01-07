import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Demo from '..';
import configMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configMockStore();
const store = mockStore({
    demo: [{
        id: 1,
        name: 'zhangsan',
        sex: 'man'
    }]
});


describe('demo render', () => {
    it('render correctly', () => {
        const wrapper = render(
            <Provider store={store}>
                <Demo />
            </Provider>
        );

        expect(wrapper.find('Button').length).toBe(2);
    });

    //  ....
});