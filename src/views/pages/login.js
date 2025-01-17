import {
    DOMHelper
} from "../../utils/dom.helper";

export class LoginPage {
    constructor() {
        this.container = DOMHelper.createElement('div', 'login-page');
    }

    async render() {
        // Background Section
        const background = DOMHelper.createElement('div', 'background');

        const bgImage = DOMHelper.createElement('img', 'background__image', {
            'src': './src/assets/images/bg-status-1x.png',
            'alt': 'Background'
        });

        const bgOverlay = DOMHelper.createElement('div', 'background__overlay');

        const bgContent = DOMHelper.createElement('div', 'background__content');
        const bgTitle = DOMHelper.createElement('h1', 'background__title');
        const titleSpan1 = DOMHelper.createElement('span');
        titleSpan1.textContent = 'Lanka';
        const titleSpan2 = DOMHelper.createElement('span');
        titleSpan2.textContent = 'Stay.';
        bgTitle.append(titleSpan1, titleSpan2);
        bgContent.appendChild(bgTitle);
        bgOverlay.appendChild(bgContent);
        background.append(bgImage, bgOverlay);

        // Register Section
        const register = DOMHelper.createElement('div', 'register');
        const registerContent = DOMHelper.createElement('div', 'register__content');

        // Title
        const registerTitle = DOMHelper.createElement('h2', 'register__title');
        registerTitle.textContent = 'Login Account';

        // Form
        const form = DOMHelper.createElement('form', 'register__form');

        // Username Group
        const usernameGroup = DOMHelper.createElement('div', 'register__form-group');
        const usernameLabel = DOMHelper.createElement('label', 'register__label', {
            'for': 'username'
        });
        usernameLabel.textContent = 'Username';
        const usernameInput = DOMHelper.createElement('input', 'register__input', {
            'type': 'text',
            'id': 'username',
            'placeholder': 'Username',
            'required': 'true'
        });
        usernameGroup.append(usernameLabel, usernameInput);

        // Password Group
        const passwordGroup = DOMHelper.createElement('div', 'register__form-group');
        const passwordLabel = DOMHelper.createElement('label', 'register__label', {
            'for': 'password'
        });
        passwordLabel.textContent = 'Password';

        const passwordContainer = DOMHelper.createElement('div', 'register__password');
        const passwordInput = DOMHelper.createElement('input', 'register__input register__input--password', {
            'type': 'password',
            'id': 'password',
            'placeholder': '6+ characters',
            'required': 'true'
        });
        passwordContainer.appendChild(passwordInput);
        passwordGroup.append(passwordLabel, passwordContainer);

        // Terms
        const terms = DOMHelper.createElement('div', 'register__terms');
        const termsLink = DOMHelper.createElement('a', 'register__terms-link', {
            'href': '#'
        });
        termsLink.textContent = 'terms and conditions';
        terms.innerHTML = 'By signing up you agree to ';
        terms.appendChild(termsLink);
        terms.innerHTML += ' at zoho.';

        // Submit Button
        const submitButton = DOMHelper.createElement('button', 'register__submit', {
            'type': 'submit'
        });
        submitButton.textContent = 'Login';

        // Create Account Link
        const loginDiv = DOMHelper.createElement('div', 'register__login');
        const createAccountLink = DOMHelper.createElement('a', 'register__login-link', {
            'href': '/register'
        });
        createAccountLink.textContent = 'Create Account';
        loginDiv.appendChild(createAccountLink);

        // Append all elements to form
        form.append(usernameGroup, passwordGroup, terms, submitButton, loginDiv);

        // Append form to register content
        registerContent.append(registerTitle, form);

        // Append register content to register
        register.appendChild(registerContent);

        // Add event listener for form submission
        form.addEventListener('submit', this.handleLogin.bind(this));

        // Append main sections to container
        this.container.append(background, register);

        return this.container;
    }

    async handleLogin(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            // Thêm logic xử lý đăng nhập ở đây
            console.log('Login attempt:', {
                username,
                password
            });
            // Sau khi đăng nhập thành công, có thể chuyển hướng người dùng
            // window.location.href = '/';
        } catch (error) {
            console.error('Login failed:', error);
        }
    }
}