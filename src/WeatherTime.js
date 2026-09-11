const location = 'Sant+Cruz+de+Tenerife'
const URL = `https://goweather.xyz/v2/weather/${location}`;

// entendiendo mejor el ciclo de vida de un component

class WeatherTime extends HTMLElement {
    // ciclo de vida 1 - datos vacíos
    data = {};

    constructor(){
        super();
        // necesitamos urgentemente hacer data fetch del clima
        // ciclo de vida 2 - hasta que la api no me responsa (que tarda 2seg siempre) estára data vacío
        this.init();
    }

    async init(){
        const response = await fetch(URL);
        setTimeout(async () => {
            // añadimos la respuesta json del fetch al objeto vacío data
            this.data = await response.json();
            // ya tenemos los datos de la API entonces ahora renderizamos, con los datos ya conseguidos, el elemento.
            // si pusiéramos init() después de render() no tendríamos los datos.
            // ciclo de vida 4 - cuando pasan los 2000, obtiene los datos de la API y vuelve a renderizar.
            this.render();
        }, 2000);
    }

    connectedCallback(){
        this.render();
    }

    disconnectedCallback(){
        
    }

    render(){
        // básicamente, si no están carga temperatura en el objeto data
        // se ejecuta el loading
        // ciclo de vida 3 - como no tiene los datos aún, renderiza el loading hasta que la api devuelva el response y se carga en data
        if (!this.data?.temperature){
            this.setHTMLUnsafe(/* html */`
                    <p>Cargando datos...</p>
                `);
            this.setHTMLUnsafe(/* html */`
                    <div class="loading"</div>
                `.repeat(3));
                // .repeat(3) equivalente a
                /*
                <weather-time>
                    <div class="loading"></div>
                    <div class="loading"></div>
                    <div class="loading"></div>
                </weather-time>
                */
        }
        /*else { / forma mas bonita que en ciclo de vida 5
            const loading = `<div class"loading"></div>`.repeat(3);
            const loaded = `<main>${this.temperature}</main>`
            this.setHTMLUnsafe(!this.temperature ? loading : loaded);
        }*/
        // ciclo de vida 5 - con el nuevo render, los datos ya estan cargados, entonces se ejecuta else.
        else {
            console.log('Datos cargados');
            this.setHTMLUnsafe(/* html */`
                    <main>${this.data?.temperature}</main>
                `);
        }
        
    }

    // getter de temperatura de data = {}
    get temperature() {
        return this.data?.temperature;
    }
}

customElements.define('weather-time', WeatherTime);