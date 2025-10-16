import { HtmlComponent } from "../components/HtmlComponent.js"
import { uid } from "../utils/uniqId.js";

export class TaskListItem extends HtmlComponent {
    task = ''

    constructor({ task }) {
        super({ id: uid() });

        this.task = task;
    }

    createElement() {
        const element = document.createElement('li');

        element.innerText = this.task;

        element.setAttribute('id', this.id);

        return element;
    }

}