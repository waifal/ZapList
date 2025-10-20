const template = document.createElement('template');
template.innerHTML = ``;

class Dropdown extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {}
}

window.customElements.define('zl-dropdown', Dropdown);