// src/main.js
import './assets/styles/main.scss';
import { Router } from './routes/router.js';
import { routes } from './routes/routes.js';

// Initialize app
window.addEventListener('DOMContentLoaded', () => {
    new Router(routes);
});