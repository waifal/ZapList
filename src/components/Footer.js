const template = document.createElement('template');
template.innerHTML = ``;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('zl-footer', Footer);