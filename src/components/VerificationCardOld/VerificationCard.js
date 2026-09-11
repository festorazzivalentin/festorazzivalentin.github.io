import styles from './VerificationCard.css' with { type: 'css' }

const title = 'Compañia registrada en Florida';
const description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, non, aut ducimus molestiae amet maiores.';

class VerificationCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' }); // inicializar shadow
        // Agregamos estilos VerificationCard.css al shadowDOM del componente.
        this.shadowRoot.adoptedStyleSheets.push(styles);
    }

    connectedCallback(){
        // @scope sólo apunta al html del this (del padre, de VerificationCard)
        // todo lo que está fuera lo ignora.
        // @scope es css interno porque define css que sólo afecta al html interno
        // del compnente (el div class card)
        // con esto el css global puede afectar al css de tu componente.
        // @scope verification-card {  } no estila, :scope {  } (pseudoclase), si estilo el elemento padre raíx
        /*this.setHTMLUnsafe(/* html `
                <style>
                    @scope {
                        :scope {
                            display: block;
                            width: 150px;
                            height: 150px;
                            background: blue;
                        }

                        .card {
                            width: 50px;
                            height: 50px;
                            background-color: red;
                        }
                    }
                </style>
                <div class="card">
                </div>
            `);*/

        // con shadowDOM
        // ya no se hace this.setHTML*(), sino this.shadowRoot.setHTML()
        /*this.shadowRoot.setHTMLUnsafe(/* html `
                <style>
                    .container {
                        background: #3131;
                        padding: 5px;
                        
                    }
                </style>
                <div class="container">
                    Shadow DOM
                </div>
            `);*/

        // lo anterior no se hace por el css
        const html = /* html */`
            <div class="container"></div>
        `;
        this.shadowRoot.setHTMLUnsafe(html);
    }

}

customElements.define('verification-card', VerificationCard);