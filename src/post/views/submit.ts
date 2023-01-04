import { inputField } from "../decorators/input-field.js";
import { Field } from "../interfaces/field.js";

export class Submit implements Field<HTMLButtonElement> {

    @inputField()
    public template(
        id: string, 
        labeled: boolean = false,
        name?: string | undefined
    ): HTMLButtonElement {
        let element = document.createElement('button');
        element.setAttribute('id', id);
        element.classList.add('btn');
        element.classList.add('btn-primary');

        if ( name ) {
            element.innerText = name;
        }
        
        return element;
    }

}