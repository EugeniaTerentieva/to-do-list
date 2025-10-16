import { Input } from "../components/Input.js";

export class TaskInput extends Input {

    constructor() {
        super({id: 'new-task-input', placeholder: "Введите имя задачи..."})
    }
}