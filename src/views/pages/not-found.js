export class NotFoundPage {
    constructor() {
        this.render = this.render.bind(this);
    }

    render() {
        const template = `
            <div class="page-container">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <a href="/" data-link>Go back to Home</a>
            </div>
        `;

        const element = document.createElement('div');
        element.innerHTML = template;
        return element;
    }
}
