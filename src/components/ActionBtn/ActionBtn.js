import styles from './ActionBtn.css' with { type: 'css' };

const DEFAULT_VALUE = 'Action Button';

class ActionBtn extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets.push(styles);
    }

    connectedCallback(){
        const html = /* html */`
            <div>
                <button>${this.getAttribute('value')}</button>
            </div>
        `;

        this.shadowRoot.setHTMLUnsafe(html);
    }
}

customElements.define('action-btn', ActionBtn);