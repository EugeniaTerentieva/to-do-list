export class HtmlComponent {
    id = '';
    classes = [];

    constructor({ id = '', classes = []}) {
        this.id = id;
        this.classes = classes; //св-во для определения css стилей

    }

    get htmlElement() {
        return document.getElementById(this.id);
    }

    get htmlClasses() {
        if (!Array.isArray(this.classes)) {
            throw new Error('Property classes must be array of string!')
        }

        return this.classes.join(' ');
    }

    onClick(callback) {
        this.htmlElement.addEventListener('click', callback);
    }
}
