import { HtmlComponent } from "../components/HtmlComponent.js"
import { uid } from "../utils/uniqId.js";
import { taskStorage } from "../storage/index.js";
import { IconButton } from "../components/IconButton.js";

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

        const deleteButton = new IconButton({ id: uid(), classes: ['delete-button'], url: 'https://img.icons8.com/?size=100&id=pClEQWddyTnT&format=png&color=900b09' }); //созд-е кнопки удалить

        element.insertAdjacentHTML('beforeend', deleteButton.html());

        setTimeout(() => {
            deleteButton.onClick(() => {
                taskStorage.tasks.splice(taskStorage.tasks.indexOf(element.task), 1);
                document.dispatchEvent(taskStorage.changeEvent);
            });
        })

        return element;
    }

}