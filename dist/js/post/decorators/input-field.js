import { Label } from "../views/label.js";
export function inputField() {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            const elementField = document.createElement('div');
            const labeled = args[1] ? args[1] : false;
            if (labeled) {
                const label = new Label();
                let id = args[0] ? args[0] : '';
                let name = args[2] ? args[2] : undefined;
                elementField.append(label.template(id, labeled, name));
            }
            elementField.classList.add('input-field');
            elementField.append(original(...args));
            return elementField;
        };
        return descriptor;
    };
}
//# sourceMappingURL=input-field.js.map