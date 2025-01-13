// src/views/pages/home.js
import { DOMHelper } from '../../utils/dom.helper.js';

export class HomePage {
    constructor() {
        this.container = DOMHelper.createElement('div', 'home-page');
    }

    async render() {
        // Header
        const header = DOMHelper.createElement('header', 'page-header');
        header.innerHTML = '<h1>Welcome to Our App</h1>';

        // Main content
        const main = DOMHelper.createElement('main', 'main-content');
        main.innerHTML = `
            <div class="content">
                <h2>Home Page</h2>
                <p>This is our awesome home page!</p>
            </div>
        `;

        // Navigation
        const nav = DOMHelper.createElement('nav', 'navigation');
        nav.innerHTML = `
            <a href="/" data-link>Home</a>
            <a href="/about" data-link>About</a>
        `;

        this.container.append(header, nav, main);
        return this.container;
    }
}