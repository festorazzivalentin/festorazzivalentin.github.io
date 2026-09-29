import { argv } from 'node:process';
import { parseArgs } from 'node:util';
// procesos del sistema

const argc = argv.length - 2;
const args = argv.slice(2);

const options = {
  name: { type: 'string', short: 'n' },
  version: { type: 'boolean', short: 'v' },
  help: { type: 'boolean', short: 'h' }
}

const { values } = parseArgs({ args, options, strict: false });

if (values.help)
  console.log('Help');
if (values.version)
  console.log("Version");
if (values.name)
  console.log(values.name);

console.log(`Escribiste ${argc} parámetros`);
args.forEach((arg, index) => {
  console.log(`${index}: ${arg}`);
});