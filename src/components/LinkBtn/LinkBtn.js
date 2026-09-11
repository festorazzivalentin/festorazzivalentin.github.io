import styles from './LinkBtn.css' with { type: 'css' };

class LinkBtn extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets.push(styles);
    }

    connectedCallback(){
        const html = /* html */`
            <button>${this.getAttribute('value')}</button>
        `;

        this.shadowRoot.setHTMLUnsafe(html);
    }
};

customElements.define('link-btn', LinkBtn)