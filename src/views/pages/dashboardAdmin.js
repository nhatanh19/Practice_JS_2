import {
    DOMHelper
} from "../../utils/dom.helper";
import { DashboardLayout } from "./DashboardLayout";

export class DashboardAdmin {
    constructor() {
        this.container = DOMHelper.createElement('div', 'admin-dashboard');
    }

    async render() {
        
        return DashboardLayout();
    }
}

export default DashboardAdmin;