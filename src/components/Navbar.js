import './Badge.js';

// Configuration
const config = {
    brand: {
        label: 'ZapList',
        href: '#'
    },
    links: [
        {
            label: 'Features',
            href: '#features'
        },
        {
            label: 'About us',
            href: '#about'
        },
        {
            label: 'What to do',
            href: '#what-to-do'
        },
        {
            label: 'Try me',
            href: '#try-me'
        }
    ],
    cta: [
        {
            label: 'Download',
            href: '#'
        }
    ]
}

class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    #_styles() {
        const style = document.createElement('style');
        style.textContent = `
            nav {
                max-width: 1100px;
                height: 112px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: sticky;
                top: 0;
                z-index: 9999;
            }

            ul {
                display: flex;
                column-gap: 2vw;
            }

            li {
                list-style-type: none;
            }

            a {
                color: #3a3a3a;
                text-decoration-line: none;
                }
                
            nav > div:first-child > a {
                    font-weight: bold;
                    font-size: 1.2rem;
            }

            nav > div:last-child {
                display: flex;
                justify-content: center;
                gap: 10px;
                flex-wrap: wrap;
            }

            nav > div:last-child > a {
                color: #111;
                font-weight: bold;
                position: relative;
            }

            nav > div:last-child > a::after {
                content: '';
                position: absolute;
                width: 100%;
                border-top: solid 3px #111;
                left: 0;
                bottom: -10px;
                border-radius: 50%;
                height: 7px;
            }
        `;

        return style;
    }

    #_build() {
        const createEl = (elementName) => document.createElement(elementName);

        // Create Elements | Branding
        const brandContainer = createEl('div');
        const a = createEl('a');
        // Set Properties
        a.href = config['brand']['href'];
        a.textContent = config['brand']['label'];
        // Append Element
        brandContainer.appendChild(a);

        const linksContainer = createEl('ul');
        for (const link of config['links']) {
            // Create Elements | Links
            const li = createEl('li');
            const a = createEl('a');
            // Set Properties
            a.href = link['href'];
            a.textContent = link['label'];

            // Append Elements
            li.appendChild(a);
            linksContainer.appendChild(li);

            // Badge
            if (link['label'].toLowerCase() === 'try me') {
                Object.assign(li.style, {
                    display: 'flex',
                    columnGap: '0.25rem'
                });
                li.innerHTML += '<zl-badge></zl-badge>';
            }
        }

        // Create Element | Call to action
        const ctaContainer = createEl('div');
        for (const link of config['cta']) {
            // Create Elements | Call to action
            const a = createEl('a');
            // Set Properties
            a.href = link['href'];
            a.textContent = link['label'];

            // Append Elements
            ctaContainer.appendChild(a);
        }

        // Create Element | Navigation
        const nav = createEl('nav');
        // Append Elements
        nav.append(brandContainer, linksContainer, ctaContainer);

        return nav;
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(this.#_styles(), this.#_build());
    }
}

customElements.define('zl-navbar', Navbar);