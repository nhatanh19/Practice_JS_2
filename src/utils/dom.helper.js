 // src/utils/dom.helper.js
 export class DOMHelper {
     static createElement(tag, className = '', attributes = {}) {
         const element = document.createElement(tag);
         if (className) element.className = className;

         Object.entries(attributes).forEach(([key, value]) => {
             element.setAttribute(key, value);
         });

         return element;
     }

     static querySelector(selector) {
         return document.querySelector(selector);
     }
 }