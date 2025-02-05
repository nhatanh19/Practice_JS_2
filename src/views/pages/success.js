import { DOMHelper } from "../../utils/dom.helper";

export class SuccessPage {
  constructor() {
    this.container = DOMHelper.createElement('div', 'success-verify-email');
  }

  async render() {
    // Container
    const container = DOMHelper.createElement('div', 'container');

    // Notification
    const notification = DOMHelper.createElement('div', 'notification');

    // Notification Header
    const notificationHeader = DOMHelper.createElement('div', 'notification__header');
    const notificationTitle = DOMHelper.createElement('h1', 'notification__title');
    const lankaTitleSpan1 = DOMHelper.createElement('span');
    lankaTitleSpan1.textContent = 'Lanka';
    const lankaTitleSpan2 = DOMHelper.createElement('span');
    lankaTitleSpan2.textContent = 'Stay.';
    notificationTitle.append(lankaTitleSpan1, lankaTitleSpan2);
    notificationHeader.appendChild(notificationTitle);

    // Notification Content
    const notificationContent = DOMHelper.createElement('div', 'notification__content');
    const notificationIcon = DOMHelper.createElement('img', 'notification__icon', {
      'src': './../../src/assets/icons/check_circle.png',
      'alt': 'Success Icon'
    });
    const notificationMessage = DOMHelper.createElement('p', 'notification__message notification__message--success');
    notificationMessage.textContent = 'Once we verified, You can Access Dashboard';
    notificationContent.append(notificationIcon, notificationMessage);

    // Notification Actions
    const notificationActions = DOMHelper.createElement('div', 'notification__actions');
    const dashboardButton = DOMHelper.createElement('button', 'notification__button notification__button--primary');
    dashboardButton.textContent = 'View Dashboard';
    dashboardButton.addEventListener('click', this.handleViewDashboard.bind(this));
    notificationActions.appendChild(dashboardButton);

    // Assemble all parts
    notification.append(notificationHeader, notificationContent, notificationActions);
    container.appendChild(notification);
    this.container.appendChild(container);

    return this.container;
  }

  handleViewDashboard() {
    // Điều hướng đến trang dashboard
    window.location.href = '/dashboard';
  }
}

export default SuccessPage;
