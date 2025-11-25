
import { Button } from "../components/Button.js";
import { ELEMENTS_CREATED_EVENT } from '../constants.js';
import { taskStorage } from "../storage/index.js";
import { TaskInput } from "./TaskInput.js";


export class CreateTaskButton extends Button {
    constructor({ taskInput }) {

        super( // = Button.constructor({ id: 'new-task-button', label: 'Создать'})
            { id: 'new-task-button', label: 'Создать' }
        )

        document.addEventListener(ELEMENTS_CREATED_EVENT, () => {
            this.onClick(() => {

                this.handleInput(taskInput);
            });

            taskInput.keyDown(() => {

                this.handleInput(taskInput);
            });

        })
    }

    handleInput(taskInput) {
        const taskName = taskInput.htmlElement?.value;

        taskStorage.createTask(taskName);

        taskInput.htmlElement.value = '';
    }
}

// input.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         handleInput();
//     }
// });

