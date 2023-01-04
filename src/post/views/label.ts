import { Field } from "../interfaces/field.js";

export class Label implements Field<HTMLLabelElement> {

    public template(
        id: string, 
        labeled: boolean,
        name?: string | undefined
    ): HTMLLabelElement {
        let element = document.createElement('label');
        
        if ( name ) {
            element.innerText = name;
        }

        if ( id !== '' ) {
            element.setAttribute('for', id);
        }

        return element;
    }

}