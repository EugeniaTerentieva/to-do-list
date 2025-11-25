import { Input } from "../components/Input.js";

export class TaskInput extends Input {

    constructor() {
        super({ id: 'new-task-input', placeholder: "Введите имя задачи..." });

    }

    keyDown(callback) {
        this.htmlElement.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                return callback(event);
            }
        });
    }

}

