- Si vas a tener muchos componentes, mejor crear /UserComponents y adjuntar todo los componentes en una carpeta separada.
- Cada clase JS está asociado al Custom element, es importante tener:
    - UserCard.js -> <user-card>
    - CardComponent.js <card-component>
    - ...
- Es importante que todos los componentes se carguen en el index.js o main.js asociado a tu index.html. El archivo index.js se encarga de ser una especie de índices de importación de ficheros js modulos.
- no tiene sentido tener un componente y un css global, la idea del componente es tener todo lo relacionado a este encapsulado en una clase: js, html, css.
- para usar css local se invento de todo:
    - bem
    - scoped components
    - !important
    - establecer el css local con setHTML*() con el DOM y \<\style> en el webcomponent. (esto lo encapsulaba pero seguía siendo css global)
        - esta opción es util para tailwind css o frameworks
- ¡y ahora lo podes hacer super cómodo y encapsulado!
    - @scope css interno pero afecta desde fuera.
        - "afecta desde fuera" significa que el html que añades puede verse afectado desde fuera (a vece interes a veces no) y el shadow domno.
    - shadow dom css interno y no afecta desde fuera.
        - attachShadow({ mode: open }) para añadir shadowDOM a un elemento.
            - Esto hara que desaparezca inicialmente, pero el elemento sigue existiendo.
                - Esto es porque el shadowDOM tapa todo el contenido que había antes, ocultando el DOM normal (Light DOM).
                - Para modificar ahora el HTML del shadowDOM se usa
                    - element.shadowRoot.setHTML*('hello');
                    - element.shadowRoot.setHTMLUnsage(\`\<\div>hola<\/div>`)
                - Podes modificar el Light DOM, pero no se ve porque el shadow DOM lo tapa.
            - es un dom particular en el elemento (o webcomponent) que se está relacionando.
            - con element -> accedes al DOM generl Light DOM
            - con element.shadowRoot -> accedes al shadow DOM visible del elemento en particular
            - se pueden combinar la visibilada del light dom y el shadow dom, dejando ver partes del light dom en combinación con el shadow dom.

- declarative dom
    - se hace sin js con \<\template> es HTML + shadoDOM.

```html
<div class="element">
    <template shadowrootmode="open"> 
        Shadow DOM
    </template>
    Light DOM
</div>
```

Lo podes enviar desde SSR desde backend, ya que sólo se hace con HTML, y no con JS.

- importante ojo con ataques xss por poner datos del usuario en setHTMLUnsafe()
    - un usuario malicioso puede colocar datos inseguros o que intentan hacer daño
    - en el happy path que nosotros creamos esto no pasa.
    - clase de DOM -> setHTML para securizarlo.

- PROBLEMA CSS EN SHADOW DOM
    - tiende a hacerse muy grande.
    - en vez de colocar con setHTML y style inline, usamos una API nueva
    - import (modulos ecs) + .adoptedStyleSheets
        - separamos en distintos ficheros
        - evita fouc (son modulos -> se aplican antes del render) fouc es un parpadeo al cargar la página.
        - requiere descargar 2 archivos (importante solo en html).
            - no es tan importante en conexiones de HTTP 2 y 3, pero sí MUY importante en HTTP 1.

- las variables css si atraviesan el shadow dom.
- despues va existir un adoptedStyleSheets pero para HTML. Aunque no es taaan relevante porque el HTML no suele crecer tanto.

---

CSS Parts

- el punto de webcomponents es crear componentes para que pueden ser reutilizadospor otras personas o desarrolladores o vos mismo.
- para que puedas colocarlo en CUALQUIER sitio de la página web.
- la idea es que puedas definir los detalles de forma cómoda con, por ejemplo, atributos. Y que esos valores cambien el contenido y se adapte al estilo.
- por ejemplo, una user-card que tenga img y un title
    - <\user-card name="valen">
    - <\user-card src="./assets/${img}"> varia la imagen.

con css parts le das la posibilidad a un usuario de modificar ciertas partes o detalles del contenido de un componente. por ejemplo, la imagen o el título de una card. y ademas del contenido, cambiar el estilo: bordear más la imagen, cambiar color de texto, etc.

- al user no le interesa cambiar el código interno del web component, sino cambiar el css, seleccionando el componente.
- es dar estilos/cambiar contenido, desde fuera del componente.

---

Enviar información mediante componentes (comunicación de componentes)

- Directamente desde el atributo del custom element, lo más sencillo, pero limitado
    - name="CatLord"
- Enviar estructuras de datos
    - siempre el valor de un atributo es un string, no un objeto o un array
        - podes parsear o forzar el tipo de dato, pero siempre recibis un string.
    - name='{ "name":"Mandev", "role":"streamer" }' peligroso
    - si no son datos sencillos, no usar atributos.
- $usercard.setAttribute('name', 'manzdev'); -> reactividad