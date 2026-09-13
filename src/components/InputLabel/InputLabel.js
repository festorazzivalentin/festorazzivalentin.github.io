import styles from './InputLabel.css' with { type: 'css' };

class InputLabel extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets.push(styles);
    }

    connectedCallback(){
        const textLabel = this.getAttribute('text-label');
        const inputType = this.getAttribute('type');
        const placeholder = this.getAttribute('placeholder');

        const html = /* html */`
            <label>${textLabel}</label>
            <input type="${inputType}" placeholder="${placeholder}"">
            
        `;

        this.shadowRoot.setHTMLUnsafe(html);
    }
}

customElements.define('input-label', InputLabel);