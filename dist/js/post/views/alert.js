export class Alert {
    constructor(type = 'success', message = '') {
        this.type = type;
        this.message = message;
    }
    template() {
        const alert = document.createElement('div');
        alert.setAttribute('id', 'post-alert');
        alert.classList.add('alert');
        alert.classList.add(this.type);
        alert.innerText = this.message;
        return alert;
    }
}
//# sourceMappingURL=alert.js.map