import { Input } from "../components/Input.js";

export class SearchInput extends Input {

    constructor() {
        
        super({id: 'search-input', placeholder: "Поиск..."}); // = Input.constructor(params);
    }

}