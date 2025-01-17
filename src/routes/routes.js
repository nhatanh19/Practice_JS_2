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

import {
    LoginPage
} from '../views/pages/login.js';

import {
    RegisterPage
} from '../views/pages/signup.js';

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
    },
    '/login': {
        component: LoginPage,
        title: 'Login'
    },
    '/signup': {
        component: RegisterPage,
        title: 'Sign Up'
    }
};