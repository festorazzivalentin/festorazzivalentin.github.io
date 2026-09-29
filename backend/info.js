import { hostname, type, uptime } from 'node:os';
import { styleText } from 'node:util';
// os -> modulo Node

const greet = "Hola mundo";
const message = `Saludando desde ${hostname} en ${type}`;

const uptimeSeconds = uptime();
const hours = Math.floor(uptimeSeconds / 60 / 60);
const RTF = new Intl.RelativeTimeFormat('es-ES'); // API navegador / Node
const time = RTF.format(-hours, 'hours');

// util api
console.log(styleText('red', 'Error: ') + 'No se realizó ninguna operación');
console.log(styleText('blue', 'Aviso: ') + 'Mensaje de anuncio o enunciativo');
console.log(styleText(['green', 'italic'], 'Correcto: ') + 'Todo salió bien');

console.log(styleText(['bgRed', 'white'], ' Error ') + 'No se realizó ninguna operación');
console.log(styleText(['bgBlue', 'white'], ' Aviso ') + 'Mensaje de anuncio o enunciativo');
console.log(styleText(['bgGreen', 'white', 'italic'], ' Correcto ') + 'Todo salió bien');


console.log(greet, message);
console.log(uptime());
console.log(`La computadora está prendida ${time}`);