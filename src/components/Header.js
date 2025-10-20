const template = document.createElement('template');
template.innerHTML = `
    <style>
        header {
            padding: 6rem 0;
            max-width: 1100px;
            margin: 0 auto;
            text-align: center;
            min-height: calc(100svh - 112px);
        }

        slot[name="title"] {
            line-height: 0.9;
            font-size: 2.45rem;
            text-shadow: 0 2px 1px rgb(0 0 0 / 5%);
        }
    </style>

    <header>
        <div>
            <slot name="title"></slot>
            <slot name="text"></slot>
        </div>
        <slot></slot>
    </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();

        this.defaults = {
            title: 'Main Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, natus.'
        }

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('zl-header', Header);