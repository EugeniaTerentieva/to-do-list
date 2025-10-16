import { HtmlComponent } from "../components/HtmlComponent.js";

export class NoTasksLabel extends HtmlComponent {

    constructor() {
        super ({id: 'no-tasks' });
    };

    html() {
        return `<div id="${this.id}">
                <p>Нет задач</p>
                </div>`
    }
}