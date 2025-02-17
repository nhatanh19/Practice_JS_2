import {
    DOMHelper
} from "../../utils/dom.helper";

export function DashboardLayout(contentSideBarLeft, headerPage, navSearch, loadDataMain) {
    const container = DOMHelper.createElement('div', 'dashboard-layout');

    // SideBar left
    const sideBar = DOMHelper.createElement('div', 'sidebar-left');
    sideBar.innerHTML = contentSideBarLeft;

    // Content main
    const contentMain = DOMHelper.createElement('div', 'content-main');
    
    // Header
    const header = DOMHelper.createElement('div', 'dashboard-header');
    header.innerHTML = headerPage;
    contentMain.appendChild(header);

    // Search
    const searchAction = DOMHelper.createElement('div', 'dashboard-search');
    searchAction.innerHTML = navSearch;
    contentMain.appendChild(searchAction);

    //load data feature
    const loadDataFeature = DOMHelper.createElement('div', 'load-data-main');
    loadDataFeature.innerHTML(loadDataMain);
    contentMain.appendChild(loadDataFeature);


    container.append(sideBar, contentMain);
    return container
}