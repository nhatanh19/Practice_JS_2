export class AboutPage {
    constructor() {
        this.render = this.render.bind(this);
    }

    render() {
        const template = `
            <div class="page-container">
                <h1>About Us</h1>
                <p>This is a demo project built with vanilla JavaScript using a component-based architecture.</p>
                <p>Features implemented:</p>
                <ul>
                    <li>Client-side routing</li>
                    <li>Component-based structure</li>
                    <li>SCSS styling</li>
                    <li>Modern build tools (Vite)</li>
                </ul>
            </div>
        `;

        const element = document.createElement('div');
        element.innerHTML = template;
        return element;
    }
}
