const template = document.createElement('template');
template.innerHTML = `
    <style>
        .container {
            outline: 1px solid #eee;
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            max-width: 1200px;
            margin: 2rem auto;
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .container.flex-reverse {
            flex-direction: row-reverse;
            text-align: right;
        }

        .text-column {
            flex: 1 1 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
        }

        .text-column > div {
            display: flex;
            flex-direction: column-reverse;
        }

        .text-column h2 {
            font-size: 2rem;
            margin: 0;
            color: #222;
        }

        .text-column small {
            color: #777;
            font-size: 0.825rem;
        }

        .text-column p {
            line-height: 1.6;
            font-size: 1rem;
        }

        .image-column {
            flex: 1 1 35%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .image-column img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            object-fit: cover;
        }
    </style>
    <div class="container">
        <div class="text-column">
            <div>
                <h2></h2>
                <small></small>
            </div>
            <div>
                <p></p>
            </div>
        </div>
        <div class="image-column">
            <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="Placeholder"/>
        </div>
    </div>
`;

class Card extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const h2 = this.shadowRoot.querySelector('h2');
        h2.textContent = this.getAttribute('zl-title');

        const small = this.shadowRoot.querySelector('small');
        small.textContent = this.getAttribute('zl-small');

        const text = this.shadowRoot.querySelector('p');
        text.textContent = this.getAttribute('zl-text');

        this.hasAttribute('zl-flex-rev') ? this.shadowRoot.querySelector('.container').classList.add('flex-reverse') : '';

        const img = this.shadowRoot.querySelector('img');
        img.src = this.getAttribute('zl-src');
        img.alt = this.getAttribute('zl-alt');
    }
}

window.customElements.define('zl-card', Card);