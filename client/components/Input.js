import { HtmlComponent } from "./HtmlComponent.js";

export class Input extends HtmlComponent {

    type = "text";
    placeholder = "";

    // constructor (params) {
    //     this.type = params.type;
    //     this.placeholder = params.placeholder;

    //     super(params);
    // }

    constructor ({ type = "text", placeholder = "", ...params }) {
        super(params);

        this.type = type;
        this.placeholder = placeholder;
    }

    html() {
        return `<input type="${this.type}" id="${this.id}" placeholder="${this.placeholder}">`
    }

} 
