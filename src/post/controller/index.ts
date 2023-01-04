import { Post } from "../models/post.js";
import { Alert } from "../views/alert.js";
import { Form } from "../views/form.js";

export class PostController {

    private form = new Form('form-submit');

    public toAppend(): HTMLElement {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        const header = document.createElement('h1');
        header.innerHTML = 'New post';
        wrapper.appendChild(header);

        const formElement = this.form.toAppend();
        wrapper.appendChild(formElement);

        formElement.addEventListener('submit', event => {
            event.preventDefault();

            const data = this.form.getValues();

            const post = new Post(
                data.title,
                data.content
            );

            const alert = new Alert('success', 'Your post has been sent.\nSee your console to view the form data.');
            wrapper.appendChild(alert.template());
            
            this.form.resetValues();

            console.log(post);
        });
        
        return wrapper;
    }
}