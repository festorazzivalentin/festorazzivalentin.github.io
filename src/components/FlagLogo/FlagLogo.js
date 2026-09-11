import styles from './FlagLogo.css' with { type: 'css' };

class FlagLogo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets.push(styles);
    }

    connectedCallback() {
        const src = this.getAttribute('src');
        const alt = this.getAttribute('alt');

        const html = /* html */`
            <img src="${src}" alt="${alt}">
        `;

        this.shadowRoot.setHTMLUnsafe(html);
    }
};

customElements.define('flag-logo', FlagLogo);