export class Label {
    template(id, labeled, name) {
        let element = document.createElement('label');
        if (name) {
            element.innerText = name;
        }
        if (id !== '') {
            element.setAttribute('for', id);
        }
        return element;
    }
}
//# sourceMappingURL=label.js.map