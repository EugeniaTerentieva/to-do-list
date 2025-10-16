
import { Button } from "../components/Button.js";
import { ELEMENTS_CREATED_EVENT } from '../constants.js';
import { api }  from '../api.js';
import { taskStorage } from "../storage/index.js";


export class CreateTaskButton extends Button {
    constructor({ taskInput }) {

        super( // = Button.constructor({ id: 'new-task-button', label: 'Создать'})
            { id: 'new-task-button', label: 'Создать' }
        )

        document.addEventListener(ELEMENTS_CREATED_EVENT, () => {
            this.onClick(() => {

                const taskName = taskInput.htmlElement?.value;

                taskStorage.createTask(taskName);

                taskInput.htmlElement.value = '';
            });
        })
    }
}

