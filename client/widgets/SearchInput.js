import { HtmlComponent } from "../components/HtmlComponent.js"

export class SearchInput extends HtmlComponent {
    html() {
        return `<input type="text" id="${this.id}" placeholder="Поиск...">`
    }
}