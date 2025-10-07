import { HtmlComponent } from "../components/HtmlComponent.js"

export class TaskList extends HtmlComponent{
    html() {
        return `<ul id="${this.id}"></ul>`;
    }
}