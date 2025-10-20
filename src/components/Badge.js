const template = document.createElement('template');
template.innerHTML = `
    <style>
        .badge {
            font-size: 0.65rem;
            padding: 0.25em 0.4em;
            border-radius: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            vertical-align: top;
            box-shadow: 0 1px 3px 1px rgb(0 0 0 / 5%);
        }

        .badge-primary {
            background-color: #007bff;
            color: #fff;
        }
    </style>
    <div>
        <span class="badge badge-primary">New</span>
    </div>
`;

class Badge extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('zl-badge', Badge);