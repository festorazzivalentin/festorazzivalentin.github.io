// no es una clase JS normal, sino una que se comporta como una etiqueta HTML normal



// ciclo de vida 1 - imports, datos de otros ficheros, lógica incial, variables, constantes
const DEFAULT_VALUE = 42;

console.log('Ciclo de vida 1');
class CardComponent extends HTMLElement { // custom element + clase js
    #private = 'Valor de Nancy'; // parámetro del usuario
    
    // construye CardComponent
    // inicialización urgente - para ejecutar requisitos previos / iniciales / previos a renderizar
    constructor(){ // ciclo de vida 2 - se ejecuta cuando se construye la etiqueta html - new CardComponent / equivalente a colocar <card-component>
        // construye HTMLElement
        super();
        console.log('Ciclo de vida 2');
        console.log(this.value);
    }

    // añadir CardComponent al DOM
    // inicialización lazy - más adelante, cuando se añade al DOM
    connectedCallback() {
        // acá se leen atributos
        // si el usuario no coloca nada en value, se usa un valor por defecto
        // this.value = this.getAttribute('value') ?? DEFAULT_VALUE;
        // si el elemento tiene el atributo open, y si no, por defecto false.
        this.isOpen = this.hasAttribute('open') ?? false;
        
        /*
        no es lo mismo element.setAttribute('value', 42), que es value="42" / atributo string HTML
        que element.value = 42, que es propiedad JS Number 42.
        pero con setAttribute('id', 'hola') y element.id si es lo mismo, ambos
        devuelven 'hola'. esto se llama reflejo.
        los frameworks hacen reflejos automáticos.
        */

        this.render();
    }

    // elimiar CardComponent del DOM
    disconnectedCallback() {

    }

    // disconnectedCallback y connectedCallback no es lo mismo que constructor()
    // constructor -> ejecutado cuando hay una instancia de la clase
    // connected -> ejecutado cuando se añade al DOM. se añade con append() setHTML*(), prepend().
    // disconnected -> se elimina del DOM con element.remove(), setHTML*().
    // constructor() se crea el component, sus propiedades y métodos, pero no se mete el DOM y no se ve, como con connected().
    // constructor() -> crear data pero no mostrarla.

    // método getter de un valor privado.
    // puede servir para que el usuario modifique data
    // en tiempo real de tu componente.
    get value() {
        return `Data ${this.#private}`;
    }

    // hace cambios visibles en el DOM.
    render() {
        // cambiamos HTML de la etiqueta.
        // this hace referencia a la Clase JS, que es un HTMLElement
        // por eso podemos usar el método setHTMLUnsafe()
        // porque este componente custom es una etiqueta HTML.
        this.setHTMLUnsafe(/* html */`
                <div class="container">
                    ${this.value}
                </div>
            `);
    }

    /* 
    Reactividad
    Se usa para hacer cosas automáticamente cuando el elemento cambie alguno de sus atributos en el HTML
    */
   // obtener atributos que estan siendo observados
   // función getter estática que devuelve un array con los nombres de los atributos que queremos vigilar.
    static get observedAttributes(){
        // por defecto no se vigila ninguna atributo
        return ['src', 'disabled']; // atributos vigilados de CardComponent
        // vigila <card-component src="" disabled>
    }

    // este método se llama solo, como el constructor() y el connectedCallback()
    // cuando uno de los atributos cambie de valor.
    // si cambias con setAttribute() lo detecta
    attributeChangedCallback(name, old, now){
        // name -> src
        // old -> src="value"
        // now -> src="new-value"
        console.log(`El atributo ${name}: cambio de ${old} a -> ${now}`);
    }

}

// Asocia CardComponent a card-component element
customElements.define('card-component', CardComponent);
// ciclo de vida 3 - se ejecuta cuando ya cargó el componente.
console.log('Ciclo de vida 3');


// notas extras
// usar componentes dentro de otros componentes -> composition o composición
// shadowDOM no es obligatorio para el CSS, depende del caso