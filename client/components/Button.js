
import { HtmlComponent } from "./HtmlComponent.js"

export class Button extends HtmlComponent {
    label = '';
    style = ''; // 'base', 'warning'

     constructor({ label = 'Label', style = 'base', ...params }) {
        super(params);

        this.label = label;
        this.style = style;
    }

    html() {
        let classes = this.htmlClasses + ' button';

        if (this.style === 'warning') {
            classes += ' button-warning';
        }

        return `<button class="${classes}" id="${this.id}">${this.label}</button>`;
    }
}

// new CreateTaskButton({ id, label }) ->
// -> CreateTaskButton.constructor({ id , label})
// -> super({ id })
// -> HtmlComponent.constructor({ id })