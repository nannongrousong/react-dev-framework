import { lazy } from 'react';

export default [{
    path: '/demo',
    component: lazy(() => import('APP_PAGES/demo'))
}];