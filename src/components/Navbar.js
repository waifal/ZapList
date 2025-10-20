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
                height: 112px;
                align-content: center;
                position: sticky;
                top: 0;
                z-index: 9999;
                transition: background-color 0.095s linear, box-shadow 0.095s linear;
            }

            nav > .container {
                max-width: 1100px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            nav.scrolled {
                border-bottom: 1px solid #eee;
                background-color: rgb(255, 255, 255, 0.97);
                box-shadow: 0 2px 3px 1px rgb(0 0 0 / 2%);
            }

            nav.scrolled a {
                color: #000;
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
                
            nav > .container > div:first-child > a {
                    font-weight: bold;
                    font-size: 1.2rem;
            }

            nav > .container > div:last-child {
                display: flex;
                justify-content: center;
                gap: 10px;
                flex-wrap: wrap;
            }

            nav > .container > div:last-child > a {
                color: #111;
                font-weight: bold;
                position: relative;
            }

            nav > .container > div:last-child > a::after {
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

        const container = createEl('div');
        container.className = 'container';

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
        container.append(brandContainer, linksContainer, ctaContainer);
        nav.appendChild(container);

        return nav;
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(this.#_styles(), this.#_build());

        window.addEventListener('scroll', this.#_handleScroll.bind(this));
    }

    #_handleScroll() {
        const nav = this.shadowRoot.querySelector('nav');

        if(window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
}

customElements.define('zl-navbar', Navbar);