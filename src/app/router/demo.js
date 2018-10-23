import Loadable from 'react-loadable';
import Loading from 'APP_COMPONENT/loading';

export default [{
    path: '/demo',
    component: Loadable({
        loader: () => import('APP_PAGES/demo'),
        loading: Loading
    })
}];