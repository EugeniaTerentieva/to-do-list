import { StyledHtmlComponent } from "./StyledHtmlComponent.js";

export class IconButton extends StyledHtmlComponent {
    url = '';

    constructor( { url = '', ...params} ) {
        super({...params, cssClassName: 'icon-button'});
        this.url = url;
    }

    html() {
        return `<button class="${this.htmlClasses}" id="${this.id}" style="background-image: url('${this.url}');"></button>`;
    }
}

// export class IconButtonNew  { //  export class IconButton extends StyledHtmlComponent
//     style = 'base'; // 'base' | 'warning'
//     id = '';
//     classes = [];
//     url = '';

//     HtmlComponent_constructor({ id, classes} ) {
//         this.id = id;
//         this.classes = classes; //св-во для определения css стилей
//     }

//     StyledHtmlComponent_constructor({ style, ...otherParams }) {
//         this.HtmlComponent_constructor(otherParams);
//         this.style = style;
//     }
    

//     get HtmlComponent_classes() {
//        if (!Array.isArray(this.classes)) {
//            throw new Error('Property classes must be array of string!')
//        }

//        return this.classes.join(' ');
//     }

//     constructor({ url, ...params }) {
//         this.StyledHtmlComponent_constructor(params);
//         this.url = url;
//     }

//     get StyledHtmlComponent_styledClasses() {
//        return '';
//      }

//     get styledClasses() {
//         if (this.style === 'warning') {
//             return 'icon-button-warning'
//         }
//     }

//      htmlClasses() {
//         const classes = this.HtmlComponent_classes; // === HtmlComponent.htmlClasses;

//         return classes + ' ' + this.styledClasses;
//     }

//     get htmlElement() {
//         return document.getElementById(this.id);
//     }

//     onClick(callback) {
//         this.htmlElement.addEventListener('click', callback);
//     }

//     html() {
//         return `<button class="${this.htmlClasses}" id="${this.id}"></button>`;
//     }
// }