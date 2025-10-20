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
        `;

        return style;
    }

    #_build() {
        const createEl = (elementName) => document.createElement(elementName);

        // Create Elements | Branding
        const brandContainer = createEl('div');
        const a   = createEl('a');
        // Set Properties
        a.href = config['brand']['href'];
        a.textContent = config['brand']['label'];
        // Append Element
        brandContainer.appendChild(a);
        
        const linksContainer  = createEl('ul');
        for(const link of config['links']) {
            // Create Elements | Links
            const li  = createEl('li');
            const a   = createEl('a');
            // Set Properties
            a.href = link['href'];
            a.textContent = link['label'];
            
            // Append Elements
            li.appendChild(a);
            linksContainer.appendChild(li);
        }

        // Create Element | Call to action
        const ctaContainer = createEl('div');
        for(const link of config['cta']) {
            // Create Elements | Call to action
            const a   = createEl('a');
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