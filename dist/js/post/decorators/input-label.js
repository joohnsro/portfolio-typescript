export function inputLabel(name = '') {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value();
        descriptor.value = function () {
            const elementField = document.createElement('label');
            elementField.setAttribute('for', '');
            elementField.innerText = name != '' ? `${name}:` : `${target.constructor.name}:`;
            elementField.append(original);
            return elementField;
        };
        return descriptor;
    };
}
//# sourceMappingURL=input-label.js.map