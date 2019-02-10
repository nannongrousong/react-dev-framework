import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { LocaleProvider } from 'antd';
import Loading from 'APP_COMPONENT/loading';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { createBrowserHistory } from 'history';
import reducers from 'APP_REDUCER';
import Exception from 'APP_COMPONENT/Exception';
import 'APP_STYLES_UTILITIES/main.less';
import appRouters from 'APP_ROUTER';

const basename = '/app';
const store = createStore(reducers, applyMiddleware(reduxThunk, reduxLogger));

class App extends Component {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <Provider store={store}>
                    <Router history={createBrowserHistory({ basename })}>
                        <Suspense fallback={<Loading />}>
                            <Switch>
                                {
                                    appRouters.map((routerItem, index) => {
                                        const { path, component: RouterComp, exact = true } = routerItem;
                                        return <Route
                                            key={index}
                                            path={path}
                                            //  react-router-dom 4.4修复该问题，会自动返回function
                                            //  https://github.com/ReactTraining/react-router/issues/6471
                                            component={() => <RouterComp />}
                                            exact={exact}
                                        />;
                                    })
                                }
                                <Route path='/500' component={() => <Exception type='500' homePath='/app/index' />} />
                                <Route path='/403' component={() => <Exception type='403' homePath='/app/index' />} />
                                <Route path='*' component={() => <Exception type='404' homePath='/app/index' />} />
                            </Switch>
                        </Suspense>
                    </Router>
                </Provider>
            </LocaleProvider>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));

module.hot && module.hot.accept();