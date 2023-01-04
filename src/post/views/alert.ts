export class Alert {

    constructor(
        private type: string = 'success',
        private message: string = ''
    ) {}

    public template(): HTMLDivElement {
        const alert = document.createElement('div');
        alert.setAttribute('id', 'post-alert');
        alert.classList.add('alert');
        alert.classList.add(this.type)
        alert.innerText = this.message;

        return alert;
    }
}