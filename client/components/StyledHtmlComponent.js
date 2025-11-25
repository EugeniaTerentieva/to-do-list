import { HtmlComponent } from "./HtmlComponent.js";

export class StyledHtmlComponent extends HtmlComponent {
    style = 'base'; // 'base' | 'warning'
    cssClassName = '';

    constructor({ style = 'base', cssClassName, ...otherParams }) {
        super(otherParams);
        this.style = style;
        this.cssClassName = cssClassName;
        // 
    }

    get styledClasses() {
        const styledClasses = [];

        styledClasses.push(this.cssClassName);

        if (this.style && this.style !== 'base') {
            styledClasses.push(`${this.cssClassName}-${this.style}`);
        }

        return styledClasses.join(' ');
    }

    get htmlClasses() {
        const classes = super.htmlClasses;

        return classes + ' ' + this.styledClasses;
    }
}
