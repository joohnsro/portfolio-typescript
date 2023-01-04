import { Field } from "../interfaces/field.js";
import { FormFields } from "../interfaces/form-fields.js";
import { Content } from "../views/content.js";
import { Submit } from "../views/submit.js";
import { Title } from "../views/title.js";

export class Form {

    public title: Field<HTMLInputElement> = new Title();
    public content: Field<HTMLTextAreaElement> = new Content();
    public submit: Field<HTMLButtonElement> = new Submit();

    constructor(public id: string) {}

    public toAppend(): HTMLElement {
        const form = document.createElement('form');
        form.setAttribute('id', this.id);

        const titleElement = this.title.template('post-title', true, 'Title');
        const contentElement = this.content.template('post-content', true, 'Content');
        const submitElement = this.submit.template('post-submit', false, 'Send');

        form.appendChild(titleElement);
        form.appendChild(contentElement);
        form.appendChild(submitElement);

        return form;
    }

    public getValues(): FormFields {
        const titleElement: HTMLInputElement = <HTMLInputElement> document.getElementById('post-title')
        const contentElement: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('post-content');

        return {
            title: titleElement.value,
            content: contentElement.value
        }
    }

    public resetValues(): void {
        const titleElement: HTMLInputElement = <HTMLInputElement> document.getElementById('post-title')
        const contentElement: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('post-content');

        titleElement.value = '';
        contentElement.value = '';
    }
}