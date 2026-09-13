import styles from './FooterSection.css' with { type: 'css' };
import '../LogoBlueYellow/LogoBlueYellow.js';

class FooterSection extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets.push(styles);
    }

    connectedCallback(){

        const html = /* html */`
            <footer>
                <logo-blue-yellow></logo-blue-yellow>
                &copy; Blue & Yellow Service. Todos los derechos reservados.  
            </footer>
        `;
        
        this.shadowRoot.setHTMLUnsafe(html);
    }
}

customElements.define('footer-section', FooterSection);