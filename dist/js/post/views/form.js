import { Content } from "../views/content.js";
import { Submit } from "../views/submit.js";
import { Title } from "../views/title.js";
export class Form {
    constructor(id) {
        this.id = id;
        this.title = new Title();
        this.content = new Content();
        this.submit = new Submit();
    }
    toAppend() {
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
    getValues() {
        const titleElement = document.getElementById('post-title');
        const contentElement = document.getElementById('post-content');
        return {
            title: titleElement.value,
            content: contentElement.value
        };
    }
    resetValues() {
        const titleElement = document.getElementById('post-title');
        const contentElement = document.getElementById('post-content');
        titleElement.value = '';
        contentElement.value = '';
    }
}
//# sourceMappingURL=form.js.map