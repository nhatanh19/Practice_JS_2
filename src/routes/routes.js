// src/routes/routes.js
import {
    HomePage
} from '../views/pages/home.js';
import {
    AboutPage
} from '../views/pages/about.js';
import {
    NotFoundPage
} from '../views/pages/not-found.js';

export const routes = {
    '/': {
        component: HomePage,
        title: 'Home'
    },
    '/about': {
        component: AboutPage,
        title: 'About'
    },
    '/404': {
        component: NotFoundPage,
        title: 'Page Not Found'
    }
};