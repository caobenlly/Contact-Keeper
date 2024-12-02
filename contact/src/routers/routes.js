import config from '../config';

// Layouts
// import { HeaderOnly } from '../components/Layout/DefaultLayout/Header';

// Pages
import Home from '../../src/pages/Home'
import About from '../../src/pages/About'

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About ,layout: null},
    // { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    // { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };