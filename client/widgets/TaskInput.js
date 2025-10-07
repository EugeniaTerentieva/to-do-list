import { HtmlComponent } from "../components/HtmlComponent.js"

export class TaskInput extends HtmlComponent {
    html() {
        return `<input type="text" placeholder="Введите имя задачи..." id="${this.id}">`
    }
}