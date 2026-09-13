import styles from './LogoBlueYellow.css' with { type: 'css' };

export class LogoBlueYellow extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets.push(styles);
    }

    connectedCallback(){
        const html = /* html */`
            <hgroup>
                <h1>Blue and Yellow</h1>
                <span>Service</span>
            </hgroup>
        `;

        this.shadowRoot.setHTMLUnsafe(html);
    }
};

customElements.define('logo-blue-yellow', LogoBlueYellow);