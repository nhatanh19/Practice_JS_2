 // src/routes/router.js
 export class Router {
     constructor(routes) {
         this.routes = routes;
         this.init();
     }

     init() {
         window.addEventListener('popstate', () => this.handleRoute());
         window.addEventListener('load', () => this.handleRoute());

         // Xử lý click navigation
         document.addEventListener('click', e => {
             if (e.target.matches('[data-link]')) {
                 e.preventDefault();
                 this.navigateTo(e.target.href);
             }
         });
     }

     async handleRoute() {
         const path = window.location.pathname;
         const route = this.routes[path] || this.routes['/404'];

         const app = document.querySelector('#app');
         app.innerHTML = ''; // Clear current content

         const page = new route.component();
         app.appendChild(await page.render());

         document.title = route.title;
     }

     navigateTo(url) {
         window.history.pushState(null, null, url);
         this.handleRoute();
     }
 }