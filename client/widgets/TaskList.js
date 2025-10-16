import { HtmlComponent } from "../components/HtmlComponent.js";
import { TASKS_CHANGED } from "../constants.js";
import { taskStorage } from "../storage/index.js";
import { TaskListItem } from "./TaskListItem.js";


export class TaskList extends HtmlComponent {

    constructor() {
        super({ id: 'item-list' });

        document.addEventListener(TASKS_CHANGED, () => {

            this.htmlElement.innerHTML = '';

            taskStorage.tasks.forEach((task) => {
 
                const li = new TaskListItem({ task });
                this.htmlElement.appendChild(li.createElement());
            })
        });
    };

    html() {
        return `<ul id="${this.id}"></ul>`;
    }


}