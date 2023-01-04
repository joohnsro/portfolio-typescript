import { inputField } from "../decorators/input-field.js";
import { Field } from "../interfaces/field.js";

export class Content implements Field<HTMLTextAreaElement> {

    @inputField()
    public template(
        id: string, 
        labeled: boolean = false,
        name?: string | undefined
    ): HTMLTextAreaElement {
        let element = document.createElement('textarea');
        element.setAttribute('id', id);
        element.classList.add('textarea');
        return element;
    }

}