import { inputField } from "../decorators/input-field.js";
import { Field } from "../interfaces/field.js";

export class Title implements Field<HTMLInputElement> {

    @inputField()
    public template(
        id: string, 
        labeled: boolean = false,
        name?: string | undefined
    ): HTMLInputElement {
        let element = document.createElement('input');
        element.setAttribute('id', id);
        element.classList.add('input');
        return element;
    }

}