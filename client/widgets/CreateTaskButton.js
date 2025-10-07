
import { Button } from "../components/Button.js";
import { ELEMENTS_CREATED_EVENT } from '../constants.js';
import { api }  from '../api.js';


export class CreateTaskButton extends Button {
    constructor({ taskInput }) {

        super( // = Button.constructor({ id: 'new-task-button', label: 'Создать'})
            { id: 'new-task-button', label: 'Создать' }
        )

        document.addEventListener(ELEMENTS_CREATED_EVENT, () => {
            this.onClick(() => {

                const taskName = taskInput.htmlElement?.value;

                api.createTask(taskName);
            });
        })
    }
}

